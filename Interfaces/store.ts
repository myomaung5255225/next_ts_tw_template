
export interface authStateProps{
    accessToken?:string;
    refreshToken?:string;
    usrNm?:string;
    isAuth:boolean;
    loginTm?:string;
}

export interface setCredentialsProps{
    accessToken:string;
    refreshToken:string;
    usrNm:string;
    isAuth:boolean;
    loginTm:string;
}

