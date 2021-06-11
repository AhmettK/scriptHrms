import React, { useEffect, useState } from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Icon, Menu, Table } from 'semantic-ui-react'

export default function JobAdvertisementList() {
    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Min. Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max. Salary</Table.HeaderCell>
                        <Table.HeaderCell>Quota</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Release Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobPosition.title}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.city}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.quota}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='9'>
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
