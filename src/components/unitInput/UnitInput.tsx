import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupText,
} from "../ui/input-group"
import type { UnitInputProps } from "./UnitInput.types"

export const UnitInput = ({
  type = "number",
  defaultValue,
  inputGroupText,
}: UnitInputProps) => {
  return (
    <InputGroup>
      <InputGroupInput type={type} defaultValue={defaultValue} />
      {!!inputGroupText && (
        <InputGroupAddon
          align="inline-end"
          className="rounded-r-md border-l bg-muted px-4"
        >
          <InputGroupText>{inputGroupText}</InputGroupText>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}
