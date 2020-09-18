import React from 'react';
import classes from './SideNav.module.css';
import NavLayout from './NavLayout/NavLayout';
import Title from './Title/Title';
import MyLeagues from './MyLeagues/MyLeagues';

import Paragraph from './Paragraph/Paragraph';
import Countries from './Countries/Countries';


const sideNav = (props) => {

    /////////////////////FINISHED//////////////////////////
    let myLeagues = <NavLayout>
                        <Title starTitle="My leagues"/>
                        <Paragraph name="league"/>
                    </NavLayout>;
    let myTeams =  <NavLayout>
                        <Title starTitle="My teams"/>
                        <Paragraph name="team" />
                    </NavLayout>               
///////////////////////////////////////////////////////

    if (props.myLeagues.length > 0) {
        myLeagues = <NavLayout>
                         <Title starTitle="My leagues"/>
                        <MyLeagues removeLeagueKey={props.removeLeagueKey} myLeagues={props.myLeagues}/>
                    </NavLayout>
    }   
    
    /////////////////////////////////////////////////////

    
    return (
        <nav className={classes.SideNav}>
            {myLeagues}
            {myTeams}
            <NavLayout>
                <Title title="Countries" />
                <Countries toggleCountries={props.toggleCountries}
                    getCountryKey={props.getCountryKey}
                    getLeagueKey={props.getLeagueKey}
                    removeLeagueKey={props.removeLeagueKey}
                    removeCountryKey={props.removeCountryKey}
                    countries={props.countries}
                    showCountries={props.showCountries}
                    selectedLeague={props.selectedLeague}
                    leagueKeys={props.leagueKeys}
                    countryKey={props.countryKey}
                    getLeagueTeams={props.getLeagueTeams}
                  />
            </NavLayout>
        </nav>
    );
};

export default sideNav;