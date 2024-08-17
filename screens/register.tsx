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
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import {
  ChevronLeftIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
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

const signUpSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  name: z
    .string()
    .min(3, "Must be at least 3 characters in length"),
  surname: z
    .string()
    .min(3, "Must be at least 3 characters in length"),
  phone: z
    .string()
    .min(1, "Phone Number is required")
  ,
  rememberme: z.boolean(),
});

type SignUpSchemaType = z.infer<typeof signUpSchema>;

const SignUpWithLeftBackground = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });
  const toast = useToast();

  const onSubmit = (data: SignUpSchemaType) => {
    
  };

  const [name, setNameValue] = useState("");
  const [surname, setSurnameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const [emailValue, setEmail] = useState(false);
  const [nameValue, setName] = useState(false);
  const [surnameValue, setSurname] = useState(false);
  const [phone, setPhone] = useState(false);  

  const handleState = (type: "name" | "surname" | "phone") => {
    if(type === "name") setName((name) => {
      return !name;
    });

    if(type === "surname") setSurname((surname) => {
        return !surname;
    });

    if(type === "phone") setPhone((phone) => {
        return !phone;
    });
  };

  const handleStateValue = (type: "name" | "surname" | "phone", value: string) => {
    if(type === "name") setNameValue(value);

    if(type === "surname") setSurnameValue(value);

    if(type === "phone") setPhoneValue(value);
  };
  
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
                Register
            </Heading>
          </VStack>
        </Pressable>
      </HStack>
      <VStack className="w-full h-full" style={{ width: "100%", alignItems: "center", flexDirection: "column", marginTop: 50 }}>
        <VStack space="xl" className="w-full" style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <FormControl isInvalid={!!errors.email} style={{ width: "90%"}}>
            <FormControlLabel>
              <FormControlLabelText>Email</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="email"
              defaultValue=""
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ email: value });
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
                    placeholder="Email"
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
                {errors?.email?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.name} style={{ width: "90%"}}>
            <FormControlLabel>
              <FormControlLabelText>Name</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="name"
              defaultValue={name}
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ name: value });
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
                    placeholder="Name"
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
          <FormControl isInvalid={!!errors.surname} style={{ width: "90%"}}>
            <FormControlLabel>
              <FormControlLabelText>Surname</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="surname"
              defaultValue={surname}
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ surname: value });
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
                    placeholder="Surname"
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
                {errors?.surname?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl isInvalid={!!errors.phone} style={{ width: "90%"}}>
            <FormControlLabel>
              <FormControlLabelText>Phone Number</FormControlLabelText>
            </FormControlLabel>
            <Controller
              name="phone"
              defaultValue={phoneValue}
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ phone: value });
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
                    placeholder="Phone Number"
                    type="text"
                    value={String(value)}
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
                {errors?.surname?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Controller
            name="rememberme"
            defaultValue={false}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                size="sm"
                value="Remember me"
                isChecked={value}
                onChange={onChange}
                aria-label="Remember me"
                style={{ width: "90%"}}
              >
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>
                  I accept the Terms of Use & Privacy Policy
                </CheckboxLabel>
              </Checkbox>
            )}
          />
        </VStack>

        <VStack className="w-full my-7" space="lg" style={{ position: "absolute", bottom: 150, width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <Button style={{ backgroundColor: "#0BDA51", paddingVertical: 15, height: "100%", width: "90%", borderRadius: 100 }} onPress={handleSubmit(onSubmit)}>
            <ButtonText className="font-medium">Proceed</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export const Register = () => {
  return (<SignUpWithLeftBackground />);
};