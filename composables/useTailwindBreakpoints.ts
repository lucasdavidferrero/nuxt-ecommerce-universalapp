import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
})

export function useTailwindBreakpoints() {
    return breakpoints
}
