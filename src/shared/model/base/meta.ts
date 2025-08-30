export class Meta {
    from: number | undefined
    path: string | undefined
    to: number | undefined
    total: number | undefined
    links: [
        {
            url: string
            label: string
            active: boolean
        }
    ] | undefined
}
