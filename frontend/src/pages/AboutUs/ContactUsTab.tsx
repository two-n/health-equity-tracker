import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./AboutUsPage.module.scss";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import FeedbackBox from "../ui/FeedbackBox";
import { Helmet } from "react-helmet-async";
import { urlMap } from "../../utils/externalUrls";

function ContactUsTab() {
  return (
    <>
      <Helmet>
        <title>Contact Us - About Us - Health Equity Tracker</title>
      </Helmet>
      <h2 className={styles.ScreenreaderTitleHeader}>Contact Us</h2>
      <Grid container className={styles.Grid}>
        <Grid
          container
          className={styles.GridOutlinedImgRow}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Hidden smDown>
            <Grid item md={5} className={styles.GridVerticallyAlignedItem}>
              <Typography
                id="main"
                className={styles.ContactUsHeaderText}
                variant="h2"
              >
                Let's move
                <br aria-hidden="true" />
                equity <b style={{ fontWeight: 400 }}>forward</b>
              </Typography>
            </Grid>
            <Grid item md={7} className={styles.HeaderImgItem}>
              <img
                width="870"
                height="644"
                src="/img/stock/women-laughing-in-line.png"
                className={styles.ImgContactUsHeader}
                alt=""
              />
            </Grid>
          </Hidden>
        </Grid>

        <Grid
          container
          className={styles.GridOutlinedRow}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Typography
              className={styles.ContactUsSubheaderText}
              variant="h4"
              paragraph={true}
            >
              Thank you for your interest in the Health Equity Tracker
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <p className={styles.ContactUsP}>
              <b>For General Requests:</b>
              <br />
              Please contact the{" "}
              <a href={urlMap.shli}>
                Satcher Health Leadership Institute
              </a> at <a href="mailto:shli@msm.edu">shli@msm.edu</a>
            </p>
            <p className={styles.ContactUsP}>
              <b>For Media Inquiries:</b>
              <br />
              Please contact Mahia Valle, Senior Communications Specialist, at{" "}
              <a href="mailto:mvalle@msm.edu">mvalle@msm.edu</a>
            </p>
            <p className={styles.ContactUsP}>
              <b>Phone:</b>
              <br />
              <a href="tel:4047528654">(404) 752-8654</a>
            </p>

            <p className={styles.ContactUsP}>
              <b>Mailing Address:</b>
              <br />
              Morehouse School of Medicine
              <br />
              Satcher Health Leadership Institute
              <br />
              720 Westview Drive SW
              <br />
              Atlanta, Georgia 30310
            </p>
          </Grid>
        </Grid>
        <FeedbackBox alwaysShow={true} />
      </Grid>
    </>
  );
}

export default ContactUsTab;
