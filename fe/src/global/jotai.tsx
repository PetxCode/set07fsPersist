import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const count = atomWithStorage("stateCount", 1);
const mainUser = atomWithStorage("mainUser", {});
const mainUserData = atomWithStorage("mainUserData", {});
const token = atomWithStorage("token", "");

export const useCount = () => {
  return useAtom(count);
};

export const useMainUserRegistration = () => {
  return useAtom(mainUser);
};

export const useMainUserData = () => {
  return useAtom(mainUserData);
};

export const useSignInToken = () => {
  return useAtom(token);
};
