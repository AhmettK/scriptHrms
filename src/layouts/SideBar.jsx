import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function SideBar() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Candidates'
                    as={NavLink}
                    to="/candidates"
                />
                <Menu.Item
                    name='Employers'
                    as={NavLink}
                    to="/employers"
                />
                <Menu.Item
                    name='Job Positions'
                    as={NavLink}
                    to="/jobPositions"
                />
                <Menu.Item
                    name='Job Advertisements'
                    as={NavLink}
                    to="/jobAdvertisements"
                />
                <Menu.Item
                    name='Job Advertisement Add'
                    as={NavLink}
                    to="/jobAdvertisementAdd"
                />
            </Menu>
        </div>
    )
}
