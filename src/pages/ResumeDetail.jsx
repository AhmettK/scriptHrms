import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ResumeService from '../services/resumeService'
import SchoolService from '../services/schoolService'
import ExperienceService from '../services/experienceService'
import LanguageService from '../services/languageService'
import TechnologyService from '../services/technologyService'
import { List } from 'semantic-ui-react'

export default function ResumeDetail() {
    let { id } = useParams()
    const [resume, setResume] = useState({})
    useEffect(() => {
        let resumeService = new ResumeService()
        resumeService.getByCandidate_Id(id).then(result => setResume(result.data.data))
    })
    let resumeId = resume.id

    const [schools, setSchools] = useState([])
    useEffect(() => {
        let schoolService = new SchoolService()
        schoolService.getByResume_Id(resumeId).then(result1 => setSchools(result1.data.data))
    })

    const [experiences, setExperiences] = useState([])
    useEffect(() => {
        let experienceService = new ExperienceService()
        experienceService.getByResume_Id(resumeId).then(result2 => setExperiences(result2.data.data))
    })

    const [languages, setLanguages] = useState([])
    useEffect(() => {
        let languageService = new LanguageService()
        languageService.getByResume_Id(resumeId).then(result3 => setLanguages(result3.data.data))
    })

    const [technologies, setTechnologies] = useState([])
    useEffect(() => {
        let technologyService = new TechnologyService()
        technologyService.getByResume_Id(resumeId).then(result4 => setTechnologies(result4.data.data))
    })

    return (
        <div>
            <h1>Cirruculum Vitaes</h1>
            <List>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                        <h3>School List</h3>
                        <List.List>
                            {
                                schools.map(school => (
                                    <List.Item key={school.id}>
                                        <List.Icon name='file' />
                                        <List.Content>
                                            <List.Header>School Name : {school.schoolName}</List.Header>
                                            <List.Description>School Department : {school.schoolDepartment}</List.Description>
                                            <List.Description>Start Date : {school.startDate}</List.Description>
                                            <List.Description>Finish Date : {school.finishDate}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List.List>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                        <h3>Experience List</h3>
                        <List.List>
                            {
                                experiences.map(experience => (
                                    <List.Item key={experience.id}>
                                        <List.Icon name='file' />
                                        <List.Content>
                                            <List.Header>Workplace Name : {experience.workplaceName}</List.Header>
                                            <List.Description>Position : {experience.position}</List.Description>
                                            <List.Description>Start Date : {experience.startDate}</List.Description>
                                            <List.Description>Finish Date : {experience.finishDate}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List.List>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                        <h3>Language List</h3>
                        <List.List>
                            {
                                languages.map(language => (
                                    <List.Item key={language.id}>
                                        <List.Icon name='file' />
                                        <List.Content>
                                            <List.Header>Language Name : {language.languageName}</List.Header>
                                            <List.Description>Language Level : {language.level}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List.List>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='folder' />
                    <List.Content>
                        <h3>Technology List</h3>
                        <List.List>
                            {
                                technologies.map(technology => (
                                    <List.Item key={technology.id}>
                                        <List.Icon name='file' />
                                        <List.Content>
                                            <List.Header>Technology Name : {technology.technologyName}</List.Header>
                                        </List.Content>
                                    </List.Item>
                                ))
                            }
                        </List.List>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    )
}
