import React from "react";
import styled from "styled-components";

const Branches = [
    {
        name: "Adhoc",
        drivers: [
            { id: 1, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 2, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 3, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 4, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 5, driver: "Ramesh", vehicle: "DL1MB0686" },
        ]
    },
    {
        name: "Amazon",
        drivers: [
            { id: 1, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 2, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 3, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 4, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 5, driver: "Ramesh", vehicle: "DL1MB0686" },
        ]
    },
    {
        name: "24x7",
        drivers: [
            { id: 1, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 2, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 3, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 4, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 5, driver: "Ramesh", vehicle: "DL1MB0686" },
        ]
    },
    {
        name: "FRC",
        drivers: [
            { id: 1, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 2, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 3, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 4, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 5, driver: "Ramesh", vehicle: "DL1MB0686" },
        ]
    },
    {
        name: "Flipkart",
        drivers: [
            { id: 1, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 2, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 3, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 4, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 5, driver: "Ramesh", vehicle: "DL1MB0686" },
        ]
    },
    {
        name: "Delhivery",
        drivers: [
            { id: 1, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 2, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 3, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 4, driver: "Ramesh", vehicle: "DL1MB0686" },
            { id: 5, driver: "Ramesh", vehicle: "DL1MB0686" },
        ]
    }
];

const colors = ["red", "green", "blue", "yellow", "orange", "purple"];

const DriverBranch = () => {
  return (
    <DriverBranchContainer>
        {Branches.map((branch, index) => (
            <BranchCard key={branch.name} color={colors[index % colors.length]}>
                <h1>{branch.name}</h1>
                {branch.drivers.map((driver) => (
                    <p key={driver.id}>
                        {driver.driver} - {driver.vehicle}
                    </p>
                ))}
            </BranchCard>
        ))}
    </DriverBranchContainer>
  );
}

export default DriverBranch;

const DriverBranchContainer = styled.div`
    max-width: 1440px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

const BranchCard = styled.div`
    background-color: ${(props) => props.color};
    padding: 1rem;
    margin: 0.5rem;
    border-radius: 10px;
    text-align: center;
    width: 100%;
    max-width: 300px;

    > h1 {
        font-weight: bolder;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
`;
