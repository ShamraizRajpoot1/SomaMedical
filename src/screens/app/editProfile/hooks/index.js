import { useImagePicker } from "../../../../services"

export function useHooks(props) {
  const {image,openCamera, openLibrary} =  useImagePicker()
    return {image,openCamera, openLibrary}
}