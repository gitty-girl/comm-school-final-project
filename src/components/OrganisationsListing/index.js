import React from "react";

import styles from "./OrganisationsListing.module.css";

import { Organisation } from "../../components";

function OrganisationsListing({ organisations }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Organisations</h2>

      <div className={styles.items}>
        {organisations.map((organisation) => (
          <Organisation organisation={organisation} key={organisation.id} />
        ))}
      </div>
    </div>
  );
}

export default OrganisationsListing;
