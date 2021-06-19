import React from 'react'
import { Route } from 'react-router'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import JobPositionList from '../pages/JobPositionList'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import ResumeDetail from '../pages/ResumeDetail'
import JobAdvertisementAdd from '../pages/JobAdvertisementAdd'

export default function Section() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Route exact path="/jobPositions" component={JobPositionList} />
                        <Route exact path="/candidates" component={CandidateList} />
                        <Route exact path="/employers" component={EmployerList} />
                        <Route exact path="/jobAdvertisements" component={JobAdvertisementList} />
                        <Route exact path="/resumes/:id" component={ResumeDetail} />
                        <Route exact path="/jobAdvertisementAdd" component={JobAdvertisementAdd} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
