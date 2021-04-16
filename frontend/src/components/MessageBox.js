import React from 'react'

export default function MessageBox({ variant, children }) {
    return (
        <div className={` alert alert-${variant} || 'info' `}>
            { children }
        </div>
    )
}
