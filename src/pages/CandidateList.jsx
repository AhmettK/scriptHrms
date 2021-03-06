import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import CandidateService from '../services/candidateService'

export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    },[])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Identity Number</Table.HeaderCell>
                        <Table.HeaderCell>Birth Date</Table.HeaderCell>
                        <Table.HeaderCell>Resume</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.identityNumber}</Table.Cell>
                                <Table.Cell>{candidate.birthDate}</Table.Cell>
                                <Table.Cell><Link to={`/resumes/${candidate.id}`}><Button primary>CV</Button></Link></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6'>
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
