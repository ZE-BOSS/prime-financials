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
// import { GoogleIcon } from "./assets/icons/google";
import { Pressable } from "@/components/ui/pressable";
import { useRouter } from "expo-router";

const USERS = [
  {
    email: "gabrial@gmail.com",
    password: "Gabrial@123",
  },
  {
    email: "tom@gmail.com",
    password: "Tom@123",
  },
  {
    email: "thomas@gmail.com",
    password: "Thomas@1234",
  },
];

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
  rememberme: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const LoginWithLeftBackground = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const toast = useToast();
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });

  const onSubmit = (data: LoginSchemaType) => {
    const user = USERS.find((element) => element.email === data.email);
    if (user) {
      if (user.password !== data.password)
        setValidated({ emailValid: true, passwordValid: false });
      else {
        setValidated({ emailValid: true, passwordValid: true });
        // toast.show({
        //   placement: "bottom right",
        //   render: ({ id }) => {
        //     return (
        //       <Toast nativeID={id} variant="solid" action="success">
        //         <ToastTitle>Logged in successfully!</ToastTitle>
        //       </Toast>
        //     );
        //   },
        // });
        // reset();
        router.push("/(tabs)/dashboard");
      }
    } else {
      setValidated({ emailValid: false, passwordValid: true });
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };
  const router = useRouter();
  return (
    <VStack className="max-w-[440px] w-full" style={{ backgroundColor: "white", flex: 1 }} space="md">
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
                    Log in
                </Heading>
            </VStack>
            </Pressable>
        </HStack>
        <VStack className="w-full h-full" style={{ width: "100%", alignItems: "center", flexDirection: "column", marginTop: 50 }}>
            <VStack space="xl" className="w-full" style={{ width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <FormControl
                isInvalid={!!errors?.email || !validated.emailValid}
                className="w-full"
                style={{ width: "90%"}}
            >
                <FormControlLabel>
                <FormControlLabelText>Email</FormControlLabelText>
                </FormControlLabel>
                <Controller
                defaultValue=""
                name="email"
                control={control}
                rules={{
                    validate: async (value) => {
                    try {
                        await loginSchema.parseAsync({ email: value });
                        return true;
                    } catch (error: any) {
                        return error.message;
                    }
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                    <InputField
                        placeholder="Enter email"
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
                <FormControlErrorIcon as={AlertTriangle} />
                <FormControlErrorText>
                    {errors?.email?.message ||
                    (!validated.emailValid && "Email ID not found")}
                </FormControlErrorText>
                </FormControlError>
            </FormControl>
            {/* Label Message */}
            <FormControl
                isInvalid={!!errors.password || !validated.passwordValid}
                className="w-full"
                style={{ width: "90%"}}
            >
                <FormControlLabel>
                <FormControlLabelText>Password</FormControlLabelText>
                </FormControlLabel>
                <Controller
                defaultValue=""
                name="password"
                control={control}
                rules={{
                    validate: async (value) => {
                    try {
                        await loginSchema.parseAsync({ password: value });
                        return true;
                    } catch (error: any) {
                        return error.message;
                    }
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                    <InputField
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                    />
                    <InputSlot onPress={handleState} className="pr-3">
                        <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                    </InputSlot>
                    </Input>
                )}
                />
                <FormControlError>
                <FormControlErrorIcon as={AlertTriangle} />
                <FormControlErrorText>
                    {errors?.password?.message ||
                    (!validated.passwordValid && "Password was incorrect")}
                </FormControlErrorText>
                </FormControlError>
            </FormControl>
            <HStack className="w-full justify-between " style={{ width: "90%"}}>
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
                      <CheckboxLabel>Remember me</CheckboxLabel>
                      </Checkbox>
                  )}
                />
                <Link href="/(auth)/forgot-password">
                <LinkText className="font-medium text-sm text-primary-700 group-hover/link:text-primary-600">
                    Forgot Password?
                </LinkText>
                </Link>
            </HStack>
            </VStack>
            <VStack className="w-full my-7 " space="lg" style={{ position: "absolute", bottom: 170, width: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Button className="w-full" style={{ backgroundColor: "#0BDA51", paddingVertical: 15, height: "100%", width: "90%", borderRadius: 100 }} onPress={handleSubmit(onSubmit)}>
                <ButtonText className="font-medium">Log in</ButtonText>
            </Button>
            </VStack>
        </VStack>
    </VStack>
  );
};

export const Login = () => {
  return (
    <LoginWithLeftBackground />
  );
};