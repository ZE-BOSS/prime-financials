import React, { useState } from "react";
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { LinkText } from "@/components/ui/link";
import Link from "@unitools/link";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import {
  ChevronLeftIcon,
  Icon,
} from "@/components/ui/icon";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangle } from "lucide-react-native";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";
import { ScrollView } from "@/components/ui/scroll-view";

const ciSchema = z.object({
    name: z
      .string()
      .min(3, "Company's Name must be at least 3 characters long"),
    doi: z
      .string()
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Date of Incorperation must be in the format dd/mm/yyyy"),
    address: z
      .string()
      .min(1, "Company's address is required"),
    directorName: z
      .string()
      .min(3, "Director's name must be at least 3 characters long"),
    directorAddress: z
      .string()
      .min(1, "Director's address is required"),
    phone: z
      .string()
      .length(11, "Phone number must be exactly 11 characters long"),
    nin: z
      .string()
      .length(11, "National Identification Number(NIN) must be exactly 11 characters long"),
    bvn: z
      .string()
      .length(10, "Bank Verification Number(BVN) must be exactly 10 characters long"),
    tin: z
      .string()
      .min(8, "A valid Tax Identification Number(TIN) is required"),
    income: z
      .string()
      .min(1, "Annual turnover is required"),
    guarantor: z
      .string()
      .length(11, "Guarantor's phone number must be exactly 11 characters long"),
});

type ciSchemaType = z.infer<typeof ciSchema>;

const AddCompanyInformation = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ciSchemaType>({
    resolver: zodResolver(ciSchema),
  });
  const toast = useToast();

  const onSubmit = (data: ciSchemaType) => {
    router.push("(loan)/apply");
  };

  const [name, setName] = useState<string>("");
  const [doi, setDOI] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [directorName, setDirectorName] = useState<string>("");
  const [directorAddress, setDirectorAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [nin, setNIN] = useState<string>("");
  const [bvn, setBVN] = useState<string>("");
  const [tin, setTIN] = useState<string>("");
  const [income, setIncome] = useState<string>("");
  const [guarantor, setGuarantor] = useState<string>("");

  const handleState = (type: "name" | "doi" | "address" | "directorName" | "directorAddress" | "phone" | "nin" | "bvn"  | "tin" | "income" | "guarantor", value: string ) => {
    if(type === "name") setName(value);
    if(type === "doi") setDOI(value);
    if(type === "directorName") setDirectorName(value);
    if(type === "address") setAddress(value);
    if(type === "directorAddress") setDirectorAddress(value);
    if(type === "phone") setPhone(value);
    if(type === "nin") setNIN(value);
    if(type === "bvn") setBVN(value);
    if(type === "tin") setTIN(value);
    if(type === "income") setIncome(value);
    if(type === "guarantor") setGuarantor(value);
  }
  
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const router = useRouter();

  return (
    <VStack className="max-w-[440px] w-full h-full" space="md" style={{ backgroundColor: "white", flex: 1 }}>
      <HStack className="md:items-center" space="md" style={{ marginTop: 20, marginBottom: 10, marginLeft: 10 }}>
        <Pressable
          onPress={() => {
            router.back();
          }}
          style={{ flexDirection: "row" }}
        >
          <Icon
            as={ChevronLeftIcon}
            className="md:hidden text-background-800"
            style={{ marginTop: 5 }}
            size="xl"
          />
          <VStack>
            <Heading className="md:text-center" size="xl">
                Company Information
            </Heading>
          </VStack>
        </Pressable>
      </HStack>
      <ScrollView
        contentContainerStyle={{
            paddingBottom: 10, // Ensure this does not limit visibility
            alignItems: 'center' // Center children horizontally
        }}
        style={{ flex: 1 }} // Make sure ScrollView takes available space
      >
        <VStack className="w-full h-full" style={{ width: "100%", alignItems: "center", flexDirection: "column", marginTop: 20 }}>
            <VStack space="xl" className="w-full" style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <FormControl isInvalid={!!errors.name} style={{ width: "90%"}}>
                    <FormControlLabel>
                        <FormControlLabelText>Company / Business Name</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                        name="name"
                        defaultValue={name}
                        control={control}
                        rules={{
                            validate: async (value) => {
                            try {
                                await ciSchema.parseAsync({ name: value });
                                handleState("name", value);
                                return true;
                            } catch (error: any) {
                                return error.message;
                            }
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input>
                                <InputField
                                    className="text-sm w-full"
                                    placeholder="Google"
                                    type="text"
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    onSubmitEditing={handleKeyPress}
                                    returnKeyType="done"
                                />
                            </Input>
                        )}
                    />
                    <FormControlError>
                        <FormControlErrorIcon size="md" as={AlertTriangle} />
                        <FormControlErrorText>
                            {errors?.name?.message}
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.doi} style={{ width: "90%"}}>
                    <FormControlLabel>
                        <FormControlLabelText>Date of Incorperation / Registration</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                        name="doi"
                        defaultValue={doi}
                        control={control}
                        rules={{
                            validate: async (value) => {
                            try {
                                await ciSchema.parseAsync({ doi: value });
                                handleState("doi", value);
                                return true;
                            } catch (error: any) {
                                return error.message;
                            }
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input>
                                <InputField
                                    className="text-sm w-full"
                                    placeholder="dd/mm/yyyy"
                                    type="text"
                                    value={value}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    onSubmitEditing={handleKeyPress}
                                    returnKeyType="done"
                                />
                            </Input>
                        )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.doi?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.address} style={{ width: "90%"}}>
                    <FormControlLabel>
                        <FormControlLabelText>Address</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="address"
                    defaultValue={address}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ address: value });
                            handleState("address", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                        <InputField
                            className="text-sm w-full"
                            placeholder="No 13, Dickeson Str."
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                            returnKeyType="done"
                        />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.address?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.directorName} style={{ width: "90%"}}>
                    <FormControlLabel>
                    <FormControlLabelText>Director's Name</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="directorName"
                    defaultValue={directorName}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ directorName: value });
                            handleState("directorName", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                            <InputField
                                className="text-sm w-full"
                                placeholder="John Doe"
                                type="text"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                onSubmitEditing={handleKeyPress}
                                returnKeyType="done"
                            />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.directorName?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.directorAddress} style={{ width: "90%"}}>
                    <FormControlLabel>
                    <FormControlLabelText>Director's Address</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="directorAddress"
                    defaultValue={directorAddress}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ directorAddress: value });
                            handleState("directorAddress", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                        <InputField
                            className="text-sm w-full"
                            placeholder="No 10, New Str."
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                            returnKeyType="done"
                        />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.phone?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.phone} style={{ width: "90%"}}>
                    <FormControlLabel>
                    <FormControlLabelText>Phone Number</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="phone"
                    defaultValue={phone}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ phone: value });
                            handleState("phone", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                        <InputField
                            className="text-sm w-full"
                            placeholder="08012345678"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                            returnKeyType="done"
                        />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.phone?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.nin} style={{ width: "90%"}}>
                    <FormControlLabel>
                    <FormControlLabelText>NIN</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="nin"
                    defaultValue={nin}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ nin: value });
                            handleState("nin", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                        <InputField
                            className="text-sm w-full"
                            placeholder="12345678901"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                            returnKeyType="done"
                        />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.nin?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.bvn} style={{ width: "90%"}}>
                    <FormControlLabel>
                    <FormControlLabelText>BVN</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="bvn"
                    defaultValue={bvn}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ bvn: value });
                            handleState("bvn", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                        <InputField
                            className="text-sm w-full"
                            placeholder="12345678901"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                            returnKeyType="done"
                        />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.bvn?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.tin} style={{ width: "90%"}}>
                    <FormControlLabel>
                    <FormControlLabelText>Tax Identification Number (TIN)</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="tin"
                    defaultValue={tin}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ tin: value });
                            handleState("tin", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                        <InputField
                            className="text-sm w-full"
                            placeholder="12345678-0001"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                            returnKeyType="done"
                        />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.tin?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.income} style={{ width: "90%"}}>
                    <FormControlLabel>
                    <FormControlLabelText>Annual Turnover</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="income"
                    defaultValue={income}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ income: value });
                            handleState("income", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                        <InputField
                            className="text-sm w-full"
                            placeholder="10000000"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                            returnKeyType="done"
                        />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.income?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.guarantor} style={{ width: "90%"}}>
                    <FormControlLabel>
                    <FormControlLabelText>Guarantor's Phone Number</FormControlLabelText>
                    </FormControlLabel>
                    <Controller
                    name="guarantor"
                    defaultValue={guarantor}
                    control={control}
                    rules={{
                        validate: async (value) => {
                        try {
                            await ciSchema.parseAsync({ guarantor: value });
                            handleState("guarantor", value);
                            return true;
                        } catch (error: any) {
                            return error.message;
                        }
                        },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input>
                        <InputField
                            className="text-sm w-full"
                            placeholder="080*******"
                            type="text"
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            onSubmitEditing={handleKeyPress}
                            returnKeyType="done"
                        />
                        </Input>
                    )}
                    />
                    <FormControlError>
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                        {errors?.guarantor?.message}
                    </FormControlErrorText>
                    </FormControlError>
                </FormControl>
            </VStack>

            <VStack className="w-full my-7" space="lg" style={{ position: "relative", marginTop: 30, marginBottom: 30, width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Button style={{ backgroundColor: "#0BDA51", paddingVertical: 15, height: 50, width: "90%" }} onPress={handleSubmit(onSubmit)}>
                    <ButtonText className="font-medium">Continue</ButtonText>
                </Button>
            </VStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export const CompanyInfo = () => {
  return (<AddCompanyInformation />);
};