export interface LogoVariants {
    LIGHT: 'light',
    DARK: 'dark',
}

export interface LogoProps {
    variant: ValueOf<LogoVariants>,
    additionalClassName: string,
    path?: string,
}