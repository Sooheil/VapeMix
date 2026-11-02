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
  value,
  inputGroupText,
  onInputChange,
}: UnitInputProps) => {
  return (
    <InputGroup>
      <InputGroupInput
        type={type}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => onInputChange?.(Number(e.target.value))}
      />
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
