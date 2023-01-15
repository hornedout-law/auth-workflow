import { SerializedError } from '@reduxjs/toolkit'
import React from 'react'



function ErrorMessage({ error }: {error: string|Error|null|SerializedError}) {
    return (<>
        {error ? <p className="text-red-600 text-3xl font-light">{(error as string) || ((error as Error)?.message)}</p> : ""}
    </>

    )
}

export default ErrorMessage