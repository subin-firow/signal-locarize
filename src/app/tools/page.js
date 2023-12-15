/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PanToolIcon from "@mui/icons-material/PanTool";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Demo from "./demo";
import { Save } from "@/services/index.service";
import toast, { Toaster } from "react-hot-toast";
import IconButton from "@mui/material/IconButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Tooltip from "@mui/material/Tooltip";

const Tools = () => {
  const [enter, setEnter] = useState({
    threshold: 10,
    color: "#68d391",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Enter",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "example_threshold",
    apiKey: "apiKey",
    max_people_count: 0,
  });
  const [warning, setWarning] = useState({
    threshold: 10,
    color: "#f6e05e",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Warning",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "example_threshold",
    apiKey: "apiKey",
    max_people_count: 0,
  });
  const [stop, setStop] = useState({
    threshold: 10,
    color: "#fc8181",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Stop",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "example_threshold",
    apiKey: "apiKey",
    max_people_count: 0,
  });

  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [activeItem, setActiveItem] = useState({
    threshold: 10,
    color: "#68d391",
    icon: "ThumbUpOffAltIcon",
    title: "Enter Here",
    subTitle: "Please enter text here",
    type: null,
    company_id: "example_company_id",
    uid: "example_uid",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "example_threshold",
    apiKey: "apiKey",
    max_people_count: 0,
  });

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : null);
    if (isExpanded) {
      switch (panel) {
        case "enter":
          setExpandedAccordion("enter");
          setActiveItem(enter);
          break;
        case "warning":
          setExpandedAccordion("warning");
          setActiveItem(warning);
          break;
        case "stop":
          setExpandedAccordion("stop");
          setActiveItem(stop);
          break;
        default:
          setExpandedAccordion(null);
      }
    }
  };

  const handleEnterChange = (event) => {
    const { name, value } = event.target;
    setEnter((prevData) => ({ ...prevData, [name]: value }));
    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleWarningChange = (event) => {
    const { name, value } = event.target;
    setWarning((prevData) => ({ ...prevData, [name]: value }));
    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStopChange = (event) => {
    const { name, value } = event.target;
    setStop((prevData) => ({ ...prevData, [name]: value }));
    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEnter((prevData) => ({ ...prevData, [name]: value }));
    setWarning((prevData) => ({ ...prevData, [name]: value }));
    setStop((prevData) => ({ ...prevData, [name]: value }));

    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSave = async () => {
    try {
      await Save(enter);
      await Save(warning);
      await Save(stop);
      toast.success("Updated Successfully!");
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error);
    }
  };

  const ReadOnlyTextField = ({ value }) => {
    const handleCopyClick = () => {
      // Copy the value to the clipboard
      navigator.clipboard.writeText(value);
    };

    return (
      <Tooltip title={value} placement="top">
        <TextField
          value={value}
          variant="outlined"
          label="Output"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <IconButton onClick={handleCopyClick} edge="end">
                <FileCopyIcon sx={{color:"#68d391"}}/>
              </IconButton>
            ),
          }}
          sx={{ml:2, width:"20%"}}
        />
      </Tooltip>
    );
  };

  return (
    <Grid container spacing={2}>
      <Toaster position="top-center" reverseOrder={false} />
      <Grid
        item
        xs={12}
        paddingTop={1}
        display={"flex"}
        justifyContent={"end"}
        sx={{ backgroundColor: "#68d391" }}
      >
        <Button
          variant="text"
          sx={{
            margin: 2,
            borderColor: "lightgray",
            color: "transparent",
          }}
        >
          Save
        </Button>
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"start"}
        padding={2}
        paddingX={4}
      >
        <TextField
          id="outlined-basic"
          label="Enter API key"
          variant="outlined"
          name="apiKey"
          value={enter.apiKey}
          onChange={handleChange}
          sx={{ marginLeft: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Maximum Number of people"
          type="numeric"
          variant="outlined"
          name="max_people_count"
          value={enter.max_people_count}
          onChange={handleChange}
          sx={{ marginLeft: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="Domain"
          variant="outlined"
          name="domain"
          value={enter.domain}
          onChange={handleChange}
          sx={{ marginLeft: 2 }}
        />
        <ReadOnlyTextField
          value={
            '<iframe src="http://3.109.149.185:3000/" width="400" height="350" frameborder="0" allowfullscreen></iframe>'
          }
        />
      </Grid>
      <Grid xs={12} md={4} paddingX={4}>
        <Accordion
          expanded={expandedAccordion === "enter"}
          onChange={handleAccordionChange("enter")}
          sx={{ boxShadow: "none", paddingY: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#68d391" }}
          >
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", color: "white" }}
            >
              Enter
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: `1px solid #68d391` }}>
            <Grid container xs={12} padding={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={enter.title}
                  onChange={handleEnterChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Subtitle"
                  variant="outlined"
                  name="subTitle"
                  value={enter.subTitle}
                  onChange={handleEnterChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Color"
                    name="color"
                    value={enter.color}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"#68d391"}>
                      <Box
                        sx={{
                          backgroundColor: "#68d391",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#68d391" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#f6e05e"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#f6e05e",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#f6e05e" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#fc8181"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#fc8181",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#fc8181" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Icon"
                    name="icon"
                    value={enter.icon}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"none"}>none</MenuItem>
                    <MenuItem value={"success"}>
                      <ThumbUpOffAltIcon />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <WarningAmberIcon />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <PanToolIcon />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Display Style
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={enter.type}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"none"}>None</MenuItem>
                    <MenuItem value={"utilization"}>Utilization</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Threshold Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={enter.threshold_type}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"utilization"}>Utilization</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Threshold Value"
                  variant="outlined"
                  name="threshold"
                  value={enter.threshold}
                  onChange={handleEnterChange}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedAccordion === "warning"}
          onChange={handleAccordionChange("warning")}
          sx={{ boxShadow: "none", paddingY: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#f6e05e" }}
          >
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", color: "white" }}
            >
              Warning
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: `1px solid #f6e05e` }}>
            <Grid container xs={12} padding={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={warning.title}
                  onChange={handleWarningChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Subtitle"
                  variant="outlined"
                  name="subTitle"
                  value={warning.subTitle}
                  onChange={handleWarningChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Color"
                    name="color"
                    value={warning.color}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"#68d391"}>
                      <Box
                        sx={{
                          backgroundColor: "#68d391",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#68d391" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#f6e05e"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#f6e05e",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#f6e05e" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#fc8181"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#fc8181",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#fc8181" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Icon"
                    name="icon"
                    value={warning.icon}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"none"}>none</MenuItem>
                    <MenuItem value={"success"}>
                      <ThumbUpOffAltIcon />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <WarningAmberIcon />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <PanToolIcon />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Display Style
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={warning.type}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"none"}>None</MenuItem>
                    <MenuItem value={"utilization"}>Utilization %</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Threshold Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={warning.threshold_type}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"utilization"}>Utilization</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Threshold Value"
                  variant="outlined"
                  name="threshold"
                  value={warning.threshold}
                  onChange={handleWarningChange}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedAccordion === "stop"}
          onChange={handleAccordionChange("stop")}
          sx={{ boxShadow: "none", paddingY: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#fc8181" }}
          >
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", color: "white" }}
            >
              Stop
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: `1px solid #fc8181` }}>
            <Grid container xs={12} padding={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  name="title"
                  value={stop.title}
                  onChange={handleStopChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Subtitle"
                  variant="outlined"
                  name="subTitle"
                  value={stop.subTitle}
                  onChange={handleStopChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Color</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Color"
                    name="color"
                    value={stop.color}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"#68d391"}>
                      <Box
                        sx={{
                          backgroundColor: "#68d391",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#68d391" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#f6e05e"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#f6e05e",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#f6e05e" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                    <MenuItem value={"#fc8181"}>
                      {" "}
                      <Box
                        sx={{
                          backgroundColor: "#fc8181",
                          width: "100%",
                        }}
                      >
                        <Typography sx={{ color: "#fc8181" }}>"e"</Typography>
                      </Box>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Icon</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Icon"
                    name="icon"
                    value={stop.icon}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"none"}>none</MenuItem>
                    <MenuItem value={"success"}>
                      <ThumbUpOffAltIcon />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <WarningAmberIcon />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <PanToolIcon />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Display Style
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={stop.type}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"none"}>None</MenuItem>
                    <MenuItem value={"utilization"}>Utilization %</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Threshold Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={stop.threshold_type}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"utilization"}>Utilization</MenuItem>
                    <MenuItem value={"occupancy"}>Occupancy (people)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Threshold Value"
                  variant="outlined"
                  name="threshold"
                  value={stop.threshold}
                  onChange={handleStopChange}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Box width={"100%"} sx={{ display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            sx={{
              borderColor: "lightgray",
              width: "30%",
              backgroundColor: "#68d391",
              "&:hover": {
                backgroundColor: "#68d391", // Change this to your desired hovering background color
              },
            }}
            onClick={onSave}
          >
            Save
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} md={8} padding={2} height={"80vh"}>
        <Demo
          title={activeItem?.title}
          subTitle={activeItem?.subTitle}
          icon={activeItem.icon}
          threshold={activeItem?.threshold}
          color={activeItem?.color}
          type={activeItem?.type}
        />
      </Grid>
    </Grid>
  );
};

export default Tools;
