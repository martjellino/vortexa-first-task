const { AuthTemplate } = require("@/components/Auth/template/AuthTemplate");

import React from 'react'

export default function layout({ children }) {
    return (
        <AuthTemplate>{children}</AuthTemplate>
    )
}
