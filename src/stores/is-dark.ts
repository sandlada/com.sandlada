import { persistentAtom } from '@nanostores/persistent'

export const isDark = persistentAtom<'true' | 'false'>('is-dark', 'false', {
    listen: true
})