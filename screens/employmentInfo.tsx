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

const eiSchema = z.object({
    company: z
      .string()
      .min(3, "Company name must be at least 3 characters long"),
    address: z
      .string()
      .min(1, "Address is required"),
    income: z
      .string()
      .min(3, "Enter a valid figure"),
});

type EISchemaType = z.infer<typeof eiSchema>;

const AddBussinessInformation = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EISchemaType>({
    resolver: zodResolver(eiSchema),
  });
  const toast = useToast();

  const onSubmit = (data: EISchemaType) => {
    router.push("(loan)/apply")
  };

  const [company, setCompany] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [income, setIncome] = useState<string>("");

  const handleState = (type: "company" | "address" | "income", value: string ) => {
    if(type === "company") setCompany(value);
    if(type === "address") setAddress(value);
    if(type === "income") setIncome(value);
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
                Employment Information
            </Heading>
          </VStack>
        </Pressable>
      </HStack>
      <VStack className="w-full h-full" style={{ width: "100%", alignItems: "center", flexDirection: "column", marginTop: 20 }}>
        <VStack space="xl" className="w-full" style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <FormControl isInvalid={!!errors.company} style={{ width: "90%"}}>
            <FormControlLabel>
              <FormControlLabelText>Name of Place of Work</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="company"
              defaultValue={company}
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await eiSchema.parseAsync({ company: value });
                    handleState("company", value);
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
                {errors?.company?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.income} style={{ width: "90%"}}>
            <FormControlLabel>
              <FormControlLabelText>Annual Income</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="income"
              defaultValue={income}
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await eiSchema.parseAsync({ income: value });
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
                    placeholder="100000"
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
          <FormControl isInvalid={!!errors.address} style={{ width: "90%"}}>
            <FormControlLabel>
              <FormControlLabelText>Company's Address</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="address"
              defaultValue={address}
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await eiSchema.parseAsync({ address: value });
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
        </VStack>

        <VStack className="w-full my-7" space="lg" style={{ position: "relative", marginTop: 30, marginBottom: 30, width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Button style={{ backgroundColor: "#0BDA51", paddingVertical: 15, height: 50, width: "90%" }} onPress={handleSubmit(onSubmit)}>
                <ButtonText className="font-medium">Continue</ButtonText>
            </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export const EmploymentInfo = () => {
  return (<AddBussinessInformation />);
};