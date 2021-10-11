import React from 'react'
import { Button } from 'antd'
import "./index.less"

const HomeComponent = () => {
    console.log('HomeComponent')
    return (
        <div className="title">
            Home Component
            <Button type="primary" >test</Button>
        </div>
    )
}

export default HomeComponent