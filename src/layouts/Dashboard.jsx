import React from 'react'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import Section from './Section'
import SideBar from './SideBar'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <SideBar/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Section/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
