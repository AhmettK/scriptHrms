import React, { useEffect, useState } from 'react'
import JobPositionService from "../services/jobPositionService"
import { Icon, Menu, Table } from 'semantic-ui-react'

export default function JobPositionList() {

    const [positions, setPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionService()
        jobPositionService.getJobPositions().then(result => setPositions(result.data.data))
    },[])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Position Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        positions.map(position => (
                            <Table.Row key={position.id}>
                                <Table.Cell>{position.title}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='1'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
