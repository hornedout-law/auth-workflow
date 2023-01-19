
import React from 'react'
import {useAuthStore} from "./auth.logic"



function ErrorMessage() {
    let {error}=useAuthStore()
    return (<>
        { error? <p className="text-red-600 text-3xl font-light">{(error as string) || ((error as Error)?.message)}</p> : ""}
    </>

    )
}

export default ErrorMessage