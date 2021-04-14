import React from "react";
import styles from "./WhatIsHealthEquityPage.module.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
  LinkWithStickyParams,
  ABOUT_US_TAB_PARAM,
  ABOUT_US_PAGE_LINK,
} from "../../utils/urlutils";
import { ABOUT_US_CONTACT_TAB_INDEX } from "../AboutUs/AboutUsPage";

function WhatIsHealthEquityPage() {
  return (
    <div className={styles.WhatIsHealthEquityPage}>
      <Grid container className={styles.Grid}>
        <Grid
          container
          className={styles.HeaderRow}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid container item xs={12} sm={12} md={4} className={styles.HeaderImgItem}>
            <img
              src="img/pexels-marcus-aurelius-4063919 1.png"
              className={styles.HeaderImg}
              alt="A woman in a wheelchair relaxing with a cup of tea"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={8} className={styles.HeaderTextItem}>
            <Typography className={styles.HeaderText}>
              What is Health Equity?
            </Typography>
            <br />
            <Typography className={styles.HeaderSubtext}>
              <p>
                <b>Health Equity</b> exists when all people, regardless of race,
                gender, socio-economic status, geographic location, or other
                societal constructs have the same access, opportunity, and
                resources to achieve their highest potential for health  (Health
                Equity Leadership & Exchange Network)
              </p>
              <p>
                Unfortunately, political and social determinants of health
                negatively affect many marginalized communities, their people,
                and their ability to lead healthy lives.
              </p>
              <br />
            </Typography>
            <Grid
              container
              xs={12}
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              className={styles.DefinitionsContainer}
            >
              <Grid item  xs={12} sm={12} md={6} className={styles.DefinitionsItem}>
                <Typography className={styles.DefinitionHeader}>
                  Political determinants of health
                </Typography>
                <p className={styles.DefinitionPronunciation}>
                  /pəˈlidək(ə)l dəˈtərmənənt əv helTH/
                </p>
                <p className={styles.DefinitionText}>
                  The creators of structural conditions and the social drivers –
                  including poor environmental conditions, inadequate
                  transportation, unsafe neighborhoods, and lack of healthy food
                  options – that affect all other dynamics of health.
                </p>
                <span className={styles.DefinitionSourceSpan}>
                  Daniel Dawes, 2020
                </span>
              </Grid>
              <Grid item  xs={12} sm={12} md={6} className={styles.DefinitionsItem}>
                <Typography className={styles.DefinitionHeader}>
                  Social determinant of health
                </Typography>
                <p className={styles.DefinitionPronunciation}>
                  /ˈsōSHəl dəˈtərmənənt əv helTH/
                </p>
                <p className={styles.DefinitionText}>
                  The conditions in the environments in which people are born,
                  live, learn, work, play, worship, and age that affect a wide
                  range of health, functioning, and quality-of-life outcomes and
                  risks.
                </p>
                <span className={styles.DefinitionSourceSpan}>
                  Healthy People 2020, CDC
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className={styles.ResourcesAndNewsRow}
          direction="column"
          justify="center"
        >
          <Grid container className={styles.ResourcesRow} justify="center">
            <Grid item>
              <Typography className={styles.ResourcesHeaderText}>
                Health equity resources
              </Typography>
            </Grid>
            <Grid
              container
              className={styles.ResourcesContainer}
              direction="row"
              justify="space-around"
              xs={12}
            >
              <Grid item  xs={12} sm={12} md={9} className={styles.ResourceItem}>
                <iframe
                  className={styles.ResourceVideoEmbed}
                  width="100%"
                  height="633px"
                  src="https://www.youtube.com/embed/cmMutvgQIcU"
                  title="YouTube video player -
                          The Allegory of the Orchard"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write;
                          encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className={styles.MainResourceTitleText}>
                  Learn about the Political Determinants of Health through the{" "}
                  <b>Allegory of the Orchard</b>
                </p>
                <p className={styles.MainResourceSubtitleText}>
                  Girding all health determinants is one that rarely gets
                  addressed but which has power over all aspects of health:
                  political determinants of health
                </p>
              </Grid>
              <Grid item  xs={12} sm={12} md={3}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="space-evenly"
                >
                  <Grid item className={styles.ResourceItem}>
                    <iframe
                      className={styles.ResourceVideoEmbed}
                      width="100%"
                      height="180px"
                      src="https://www.youtube.com/embed/cmMutvgQIcU"
                      title="YouTube video player -
                              Jessica's Story"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write;
                              encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <p className={styles.ResourceTitleText}>Jessica's Story</p>
                    <p className={styles.ResourceSubtitleText}>
                      How political determinants of health operate and the
                      impact they have on BIPOC communities
                    </p>
                  </Grid>
                  <Grid item className={styles.ResourceItem}>
                    <a href="https://ncrn.msm.edu/">
                      <img
                        className={styles.ResourceImg}
                        src="img/maxresdefault (1) 1.png"
                        alt="Header for Morehouse School of Medicine
                             National COVID-19 Resiliency Network"
                      />
                      <p className={styles.ResourceTitleText}>
                        Morehouse School of Medicine National COVID-19
                        Resiliency Network (NCRN)
                      </p>
                      <p className={styles.ResourceSubtitleText}>
                        We provide awareness and linkage to critical health
                        information and services, helping families recover from
                        difficulties that may have been caused or worsened by
                        the Coronavirus (COVID-19) pandemic.
                      </p>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            className={styles.NewsAndStoriesRow}
            direction="row"
            justify="center"
          >
            <Grid item>
              <Typography className={styles.NewsAndStoriesHeaderText}>
                News and stories
              </Typography>
              <span className={styles.NewsAndStoriesSubheaderText}>
                Read the latest news, posts, and stories related to health
                equity
              </span>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item  xs={12} sm={12} md={6} className={styles.NewsAndStoriesItem}>
                <img
                  className={styles.NewsAndStoriesBigImg}
                  src="img/pexels-august-de-richelieu-4261261 1.png"
                  alt="Asian woman assisting a young black child with his
                       mask"
                />
                <p className={styles.NewsAndStoriesTitleText}>
                  COVID-19: Black Folks Have Been Trying To Tell You That Data
                  Is Political
                </p>
                <p className={styles.NewsAndStoriesSubtitleText}>
                  COVID-19 does not discriminate, but our current economic and
                  social policies do. Let’s talk about “a crisis within a
                  crisis” that too few policy makers and leaders have been
                  raising.{" "}
                  <a href="https://www.essence.com/feature/covid-19-black-americans-data/">
                    Read more
                  </a>
                </p>
              </Grid>
              <Grid item  xs={12} sm={12} md={6} className={styles.NewsAndStoriesItem}>
                <img
                  className={styles.NewsAndStoriesBigImg}
                  src="img/pexels-cottonbro-7000149 1.png"
                  alt="Asian woman sitting while wearing a mask"
                />
                <p className={styles.NewsAndStoriesTitleText}>
                  Back to ‘normal’ isn’t good enough
                </p>
                <p className={styles.NewsAndStoriesSubtitleText}>
                  With the anticipation of increasing distribution of Covid-19
                  vaccines, Americans are looking forward to a “return to
                  normal.” But the reality is that “normal” is a privilege, one
                  that is out of reach for millions.{" "}
                  <a href="https://www.statnews.com/2021/02/10/back-to-normal-isnt-good-enough/">
                    Read more
                  </a>
                </p>
              </Grid>
              <Grid item  xs={12} sm={12} md={4} className={styles.NewsAndStoriesItem}>
                <img
                  className={styles.NewsAndStoriesSmallImg}
                  src="img/pexels-alex-green-5699516 1.png"
                  alt="Documents lying on a table"
                />
                <p className={styles.NewsAndStoriesTitleText}>
                  Data and Technology Can Help Us Make Progress on COVID
                  Inequities
                </p>
                <p className={styles.NewsAndStoriesSubtitleText}>
                  <a href="https://www.scientificamerican.com/article/data-and-technology-can-help-us-make-progress-on-covid-inequities/">
                    Read more
                  </a>
                </p>
              </Grid>
              <Grid item  xs={12} sm={12} md={4} className={styles.NewsAndStoriesItem}>
                <img
                  className={styles.NewsAndStoriesSmallImg}
                  src="img/pexels-ketut-subiyanto-4473409 2.png"
                  alt="Asian woman laughing with two children"
                />
                <p className={styles.NewsAndStoriesTitleText}>
                  Importance of disaggregated data
                </p>
                <p className={styles.NewsAndStoriesSubtitleText}>
                  <a href="/">Learn more</a>
                </p>
              </Grid>
              <Grid item  xs={12} sm={12} md={4} className={styles.NewsAndStoriesItem}>
                <img
                  className={styles.NewsAndStoriesSmallImg}
                  src="img/Screen Shot 2021-03-01 at 5.25 1.png"
                  alt="Laptop sitting on desk and opened to the Health
                       Equity Tracker Homepage"
                />
                <p className={styles.NewsAndStoriesTitleText}>
                  Advancing Health Equity through the Political Determinants of
                  Health and Health Equity Tracker
                </p>
                <p className={styles.NewsAndStoriesSubtitleText}>
                  <a href="/">Learn more</a>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          className={styles.JoinTheEffortRow}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item className={styles.JoinTheEffortHeaderRow}>
            <Typography className={styles.JoinTheEffortHeaderText}>
              How do I join the effort?
            </Typography>
            <p className={styles.JoinTheEffortSubheaderText}>
              To advance health equity, we need smart, talented,
              <br />
              passionate folks like you on board.
            </p>
            <br />
            <br />
          </Grid>
          <Grid container className={styles.JoinTheEffortItemContainer}>
            <Grid
              item
              xs={5}
              className={styles.JoinTheEffortImgContainer}
              style={{ backgroundColor: "#275141" }}
            >
              <img
                src="img/HET_Dots_1_v3_1000px.gif"
                alt="Decorative dots"
                className={styles.JoinTheEffortImg}
              />
            </Grid>
            <Grid item xs={7} className={styles.JoinTheEffortTextContainer}>
              <Typography className={styles.JoinTheEffortStepHeaderText}>
                Sign up for our newsletter
              </Typography>
              <p className={styles.JoinTheEffortStepText}>
                Want updates on the latest news in health equity? Sign up for
                our Satcher Health Leadership Institute newsletter.
              </p>
              <form className={styles.EmailAddressForm}
                    action="https://satcherinstitute.us11.list-manage.com/subscribe?u=6a52e908d61b03e0bbbd4e790&id=3ec1ba23cd&"
                    method="post"
                    target="_blank">
                <input
                  className={styles.EmailAddressFormText}
                  type="email"
                  id="mce-EMAIL"
                  name="MERGE0"
                  placeholder="Enter email address"
                />
                <input
                  className={styles.EmailAddressFormSubmit}
                  type="submit"
                  value="Sign up"
                />
              </form>
            </Grid>
          </Grid>
          <Grid container className={styles.JoinTheEffortItemContainer}>
            <Grid
              item
              xs={5}
              className={styles.JoinTheEffortImgContainer}
              style={{ backgroundColor: "#EDB2A6" }}
            >
              <img
                src="img/HET_Fields_1_v2_1000px.gif"
                alt="Decorative thick lines"
                className={styles.JoinTheEffortImg}
              />
            </Grid>
            <Grid item xs={7} className={styles.JoinTheEffortTextContainer}>
              <Typography className={styles.JoinTheEffortStepHeaderText}>
                Share information with your community
              </Typography>
              <p className={styles.JoinTheEffortStepText}>
                Movements begin with awareness, and gain momentum with
                excitement. We need your help in creating both for the movement
                to advance health equity!
                <br />
                <br />
                Share this tool with your network
              </p>
              <form className={styles.EmailAddressForm}>
                <input
                  className={styles.EmailAddressFormText}
                  type="text"
                  value="www.healthequitytracker.org"
                  readOnly
                />
              </form>
              <div className={styles.SocialsDiv}>
                <a target="_blank"
                   rel="noopener noreferrer"
                   href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhealthequitytracker.org%2F&amp;src=sdkpreparse">
                  <FacebookIcon className={styles.SocialsIcon} />
                </a>
                <a target="_blank"
                   rel="noopener noreferrer"
                   href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fhealthequitytracker.org">
                  <LinkedInIcon className={styles.SocialsIcon} />
                </a>
                <a target="_blank"
                   rel="noopener noreferrer"
                   href="https://twitter.com/share?url=https%3A%2F%2Fwww.healthequitytracker.org"
                   className="twitter-share-button"
                   data-url="https://www.healthequitytracker.org">
                  <TwitterIcon className={styles.SocialsIcon} />
                </a>
              </div>
            </Grid>
          </Grid>
          <Grid container className={styles.JoinTheEffortItemContainer}>
            <Grid
              item
              xs={5}
              className={styles.JoinTheEffortImgContainer}
              style={{ backgroundColor: "#A5CDC0" }}
            >
              <img
                src="img/HET_Overlapping_Lines_v4_1000px.gif"
                alt="Decorative thin lines"
                className={styles.JoinTheEffortImg}
              />
            </Grid>
            <Grid item xs={7} className={styles.JoinTheEffortTextContainer}>
              <Typography className={styles.JoinTheEffortStepHeaderText}>
                Share your story
              </Typography>
              <p className={styles.JoinTheEffortStepText}>
                We would love to hear about and feature your work in health
                equity, or if you’ve used the Health Equity Tracker to take
                action, implement a program, advocate for change, or more.
              </p>
              <LinkWithStickyParams
                class={styles.ContactUsLink}
                to={`${ABOUT_US_PAGE_LINK}?${ABOUT_US_TAB_PARAM}=${ABOUT_US_CONTACT_TAB_INDEX}`}
              >
                Contact Us
              </LinkWithStickyParams>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default WhatIsHealthEquityPage;