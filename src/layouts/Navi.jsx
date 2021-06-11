import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Link to=''><Menu.Item name='HUMAN RESOURCE MANAGEMENT SYSTEM'/></Link> 
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button primary>Login</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>Register</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
