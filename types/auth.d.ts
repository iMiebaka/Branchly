declare interface ITLogin{
    email: string
    password: string
}

declare interface ITRegister{
    name: string
    email: string
    username?: string
    password: string
}


declare interface ITLoginToken{
    accessToken: string
    refreshToken: string
}



declare interface ITResetPassword{
    token: string
    password: string
}
