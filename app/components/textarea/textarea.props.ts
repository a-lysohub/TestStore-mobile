export type TextareaProps = {
    label?: string
    placeholder?: string
    onChange?: (value: string) => void
    onBlur?: () => void
    value?: string
    errorCode?: string
};
