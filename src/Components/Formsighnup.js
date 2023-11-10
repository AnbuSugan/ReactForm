import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Useform from "../hooks/Useform";
import validate from "../Utils/Validate";

const Formsighnup = () => {
  const { handlechange, values, handleSubmit, errors } = Useform(validate);
  return (
    <div>
      <Container
        className="p-4"
        style={{
          backgroundColor: "#dae6ebcc",
          fontFamily: "sura",
          width: "1000px",
        }}
      >
        <Row>
          <Col>
            {/* Header */}
            <h1
              className="fs-2 text-center"
              style={{ color: "rgb(87, 113, 128)" }}
            >
              Production Order Form
            </h1>
            {/* Date */}
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="date" className="fs-4">
                  Date of Deadline:
                </Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  id="date"
                  className="form-input"
                  onChange={handlechange}
                  value={values.date}
                />
                {errors.date && (
                  <p className="fs-5" style={{ color: "red " }}>
                    {errors.date}
                  </p>
                )}
              </Form.Group>

              {/* Compaign Tittle */}
              <Form.Group>
                <Form.Label htmlFor="compaignTitle" className="fs-4">
                  Campaign Title:
                </Form.Label>
                <Form.Control
                  type="text"
                  name="compaignTitle"
                  id="compaignTitle"
                  value={values.compaignTitle}
                  onChange={handlechange}
                />
                {errors.compaignTitle && (
                  <p className="fs-5" style={{ color: "red " }}>
                    {errors.compaignTitle}
                  </p>
                )}
              </Form.Group>
              {/* Choose the Medio*/}
              <Form.Group>
                <Form.Label className="fs-4">Radio Box:</Form.Label>

                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "70%",
                    }}
                  >
                    <Form.Check
                      type="radio"
                      label="Radio"
                      className="fs-5"
                      value="Radio"
                      id="mediaOptions"
                      name="mediaOptions"
                    />
                    <Form.Check
                      type="radio"
                      label="Phone Message On Hold"
                      className="fs-5"
                      value="Phone Message On Hold"
                      id="mediaOptions"
                      name="mediaOptions"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "68%",
                    }}
                  >
                    <Form.Check
                      type="radio"
                      label="Television"
                      className="fs-5"
                      value="Television"
                      id="mediaOptions"
                      name="mediaOptions"
                    />
                    <Form.Check
                      type="radio"
                      label="Internet Ad Campaign"
                      className="fs-5"
                      value="Internet Ad Campaign"
                      id="mediaOptions"
                      name="mediaOptions"
                    />
                  </div>
                  <div>
                    <Form.Check
                      type="radio"
                      label="Video Narration"
                      className="fs-5"
                      value="Video Narration"
                      id="mediaOptions"
                      name="mediaOptions"
                    />
                  </div>
                </div>
              </Form.Group>
              {errors.mediaOptions && (
                <p className="fs-5" style={{ color: "red " }}>
                  {errors.mediaOptions}
                </p>
              )}

              {/*  Choose The Length*/}
              <Form.Group className="mt-5">
                <Form.Label className="fs-4">Choose The Medio:</Form.Label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "60%",
                  }}
                >
                  <Form.Check
                    type="radio"
                    name="lengthBox"
                    id="lengthBox"
                    label="Long Form Narration"
                    className="fs-5"
                  />
                  <Form.Check
                    type="radio"
                    name="lengthBox"
                    id="lengthBox"
                    label="30 Seconds"
                    className="fs-5"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "60%",
                  }}
                >
                  <Form.Check
                    type="radio"
                    name="lengthBox"
                    id="lengthBox"
                    label="60 Seconds"
                    className="fs-5"
                  />
                  <Form.Check
                    type="radio"
                    name="lengthBox"
                    id="lengthBox"
                    label="15 Seconds"
                    className="fs-5"
                  />
                </div>
              </Form.Group>
              {errors.lengthBox && (
                <p className="fs-5" style={{ color: "red " }}>
                  {errors.lengthBox}
                </p>
              )}
              {/* How Many Voice Talents Are needed */}
              <Form.Group className="mb-2">
                <Form.Label className="fs-4">
                  How many voice Talents are needed?
                </Form.Label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  <Form.Check
                    type="radio"
                    name="voiceTalentBox"
                    id="voiceTalentBox"
                    label="1"
                    className="fs-5"
                  />
                  <Form.Check
                    type="radio"
                    name="voiceTalentBox"
                    id="voiceTalentBox"
                    label="2"
                    className="fs-5"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  <Form.Check
                    type="radio"
                    name="voiceTalentBox"
                    id="voiceTalentBox"
                    label="3"
                    className="fs-5"
                  />
                  <Form.Check
                    type="radio"
                    name="voiceTalentBox"
                    id="voiceTalentBox"
                    label="4"
                    className="fs-5"
                  />
                </div>
              </Form.Group>
              {errors.voiceTalentBox && (
                <p className="fs-5" style={{ color: "red " }}>
                  {errors.voiceTalentBox}
                </p>
              )}
              {/* Special elements/jingiles/beds/theme:Text Area */}
              <Form.Group>
                <Form.Label className="fs-4">
                  Special elements/jingiles/beds/theme:
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="specialText"
                  id="specialText"
                  style={{ border: "1px solid #ccc" }}
                  value={values.specialText}
                  onChange={handlechange}
                />
              </Form.Group>
              {errors.specialText && (
                <p className="fs-5" style={{ color: "red " }}>
                  {errors.specialText}
                </p>
              )}
              {/* Final Spot Required */}
              <Form.Group>
                <Form.Label className="fs-4">
                  Final Spot Approval Required
                </Form.Label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  <Form.Check
                    type="radio"
                    name="spotOption"
                    id="spotOption"
                    label="Yes"
                    className="fs-5"
                  />
                  <Form.Check
                    type="radio"
                    name="spotOption"
                    id="spotOption"
                    label="No"
                    className="fs-5"
                  />
                </div>
              </Form.Group>
              {errors.spotOption && (
                <p className="fs-5" style={{ color: "red " }}>
                  {errors.spotOption}
                </p>
              )}
              {/*  Additional Spot/Traffic Info  Text Area*/}
              <Form.Group>
                <Form.Label className="fs-4">
                  Additional Spot/Traffic Info:
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="spotTextarea"
                  id="spotTextarea"
                  style={{ border: "1px solid #ccc" }}
                  value={values.spotTextarea}
                  onChange={handlechange}
                />
              </Form.Group>
              {errors.spotTextarea && (
                <p className="fs-5" style={{ color: "red " }}>
                  {errors.spotTextarea}
                </p>
              )}
              {/* Please tell us how to get in touch with you */}
              <h1
                className="fs-2 text-center p-3 "
                style={{ color: "rgb(87, 113, 128)" }}
              >
                Please tell us how to get in touch with you
              </h1>
              {/* Name & Last Nmae */}
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    placeholder="First name"
                    name="firstName"
                    id="firstName"
                    onChange={handlechange}
                    value={values.firstName}
                  />
                </Col>
                {errors.firstName && (
                  <p className="fs-5" style={{ color: "red " }}>
                    {errors.firstName}
                  </p>
                )}
                <Col>
                  <Form.Control
                    placeholder="Last name"
                    name="lastName"
                    id="lastName"
                    onChange={handlechange}
                    value={values.lastName}
                  />
                </Col>
                {errors.lastName && (
                  <p className="fs-5" style={{ color: "red " }}>
                    {errors.lastName}
                  </p>
                )}
              </Row>
              {/* Phone Number */}
              <Form.Group className="mb-3">
                <Form.Label className="fs-4">Phone Number:</Form.Label>
                <Form.Control
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={values.phoneNumber}
                  onChange={handlechange}
                />
                {errors.phoneNumber && (
                  <p className="fs-5" style={{ color: "red " }}>
                    {errors.phoneNumber}
                  </p>
                )}
              </Form.Group>
              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label className="fs-4">Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handlechange}
                />
                {errors.date && (
                  <p className="fs-5" style={{ color: "red " }}>
                    {errors.email}
                  </p>
                )}
              </Form.Group>
              {/* Verification and Verification Image */}
              <Form.Group>
                <Form.Label htmlFor="verification" className="fs-4">
                  Verification:
                </Form.Label>
              </Form.Group>
              <Form.Group
                className="verifications"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="imgVerification">
                  <img src="./random.png" alt="Image" />
                </div>

                <Form.Control
                  type="text"
                  id="verification"
                  name="verification"
                  className="ms-5 w-100"
                  value={values.verification}
                  onChange={handlechange}
                />
              </Form.Group>
              {errors.verification && (
                <p className="fs-5" style={{ color: "red " }}>
                  {errors.verification}
                </p>
              )}

              <div className="text-center mt-5">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Formsighnup;
