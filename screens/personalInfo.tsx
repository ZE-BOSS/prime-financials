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

const piSchema = z.object({
    first: z
      .string()
      .min(3, "First name must be at least 3 characters long"),
    last: z
      .string()
      .min(3, "Last name must be at least 3 characters long"),
    dob: z
      .string()
      .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Date of birth must be in the format dd/mm/yyyy"),
    nin: z
      .string()
      .length(11, "National Identification Number must be exactly 11 characters long"),
    bvn: z
      .string()
      .length(10, "Bank Verification Number must be exactly 10 characters long"),
    phone: z
      .string()
      .length(11, "Phone number must be exactly 11 characters long"),
    address: z
      .string()
      .min(1, "Address is required"),
});

type PISchemaType = z.infer<typeof piSchema>;

const AddPersonalInformation = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PISchemaType>({
    resolver: zodResolver(piSchema),
  });
  const toast = useToast();

  const onSubmit = (data: PISchemaType) => {
    router.push("(loan)/employment")
  };

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDOB] = useState<string>("");
  const [nin, setNIN] = useState<string>("");
  const [bvn, setBVN] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [padding, setPadding] = useState<boolean>(false);

  const handleState = (type: "first" | "last" | "dob" | "nin" | "bvn" | "address" | "phone", value: string ) => {
    if(type === "first") setFirstName(value);
    if(type === "last") setLastName(value);
    if(type === "dob") setDOB(value);
    if(type === "nin") setNIN(value);
    if(type === "bvn") setBVN(value);
    if(type === "address") setAddress(value);
    if(type === "phone") setPhoneNumber(value);
  }

  Keyboard.addListener('keyboardDidShow', () => {
    setPadding(true);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    setPadding(false);
  });
  
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
                Personal Information
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
        <VStack className="w-full h-full" style={{ width: "100%", alignItems: "center", flexDirection: "column", marginTop: 20, marginBottom: padding? 300 : 10 }}>
            <VStack space="xl" className="w-full" style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <FormControl isInvalid={!!errors.first} style={{ width: "90%"}}>
                <FormControlLabel>
                <FormControlLabelText>First Name</FormControlLabelText>
                </FormControlLabel>
                <Controller
                name="first"
                defaultValue={firstName}
                control={control}
                rules={{
                    validate: async (value) => {
                    try {
                        await piSchema.parseAsync({ first: value });
                        handleState("first", value);
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
                        placeholder="John"
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
                    {errors?.first?.message}
                </FormControlErrorText>
                </FormControlError>
            </FormControl>
            <FormControl isInvalid={!!errors.last} style={{ width: "90%"}}>
                <FormControlLabel>
                <FormControlLabelText>Last Name</FormControlLabelText>
                </FormControlLabel>
                <Controller
                name="last"
                defaultValue={lastName}
                control={control}
                rules={{
                    validate: async (value) => {
                    try {
                        await piSchema.parseAsync({ last: value });
                        handleState("last", value);
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
                        placeholder="Doe"
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
                    {errors?.last?.message}
                </FormControlErrorText>
                </FormControlError>
            </FormControl>
            <FormControl isInvalid={!!errors.dob} style={{ width: "90%"}}>
                <FormControlLabel>
                <FormControlLabelText>Date of Birth</FormControlLabelText>
                </FormControlLabel>
                <Controller
                name="dob"
                defaultValue={dob}
                control={control}
                rules={{
                    validate: async (value) => {
                    try {
                        await piSchema.parseAsync({ dob: value });
                        handleState("dob", value);
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
                    {errors?.dob?.message}
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
                            await piSchema.parseAsync({ nin: value });
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
                            await piSchema.parseAsync({ bvn: value });
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
                        await piSchema.parseAsync({ address: value });
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
            <FormControl isInvalid={!!errors.phone} style={{ width: "90%"}}>
                <FormControlLabel>
                <FormControlLabelText>Phone Number</FormControlLabelText>
                </FormControlLabel>
                <Controller
                name="phone"
                defaultValue={phoneNumber}
                control={control}
                rules={{
                    validate: async (value) => {
                    try {
                        await piSchema.parseAsync({ phone: value });
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

export const PersonalInfo = () => {
  return (<AddPersonalInformation />);
};