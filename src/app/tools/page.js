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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Demo from "./demo";
import { Save } from "@/services/index.service";
import toast, { Toaster } from "react-hot-toast";
import IconButton from "@mui/material/IconButton";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Tooltip from "@mui/material/Tooltip";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Tools = () => {
  const [enter, setEnter] = useState({
    threshold: 10,
    color: "#68d391",
    icon: "success",
    title: "いらっしゃいませ",
    subTitle: "入力してください",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Enter",
    location_id: "",
    domain: "example_domain",
    threshold_type: "occupancy",
    max_people_count: 100,
    iconSize: 300,
    titleFontSize: 24,
    subTitleFontSize: 12,
    spot_id: "",
    backgroundColor: "#26874B",
  });
  const [warning, setWarning] = useState({
    threshold: 20,
    color: "#f6e05e",
    icon: "warning",
    title: "注意",
    subTitle: "ひとつずつ入力してください。",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Warning",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "occupancy",
    max_people_count: 100,
    iconSize: 300,
    titleFontSize: 24,
    subTitleFontSize: 12,
    spot_id: "example spot ID",
    backgroundColor: "#897506",
  });
  const [stop, setStop] = useState({
    threshold: 30,
    color: "#fc8181",
    icon: "stop",
    title: "ストップ",
    subTitle: "入らないでください",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Stop",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "occupancy",
    max_people_count: 0,
    iconSize: 300,
    titleFontSize: 24,
    subTitleFontSize: 12,
    spot_id: "example spot ID",
    backgroundColor: "#EF0606",
  });
  const [closed, setClosed] = useState({
    threshold: 30,
    color: "#fc8181",
    icon: "stop",
    title: "ストップ",
    subTitle: "入らないでください",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Closed",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "occupancy",
    max_people_count: 0,
    iconSize: 300,
    titleFontSize: 24,
    subTitleFontSize: 12,
    spot_id: "example spot ID",
    backgroundColor: "#EF0606",
    closing_time: null,
    opening_time: null,
  });
  const [holiday, setHoliday] = useState({
    threshold: 30,
    color: "#fc8181",
    icon: "stop",
    title: "ストップ",
    subTitle: "入らないでください",
    type: "none",
    company_id: "example_company_id",
    uid: "example_uid",
    display_type: "Holiday",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "occupancy",
    max_people_count: 0,
    iconSize: 300,
    titleFontSize: 24,
    subTitleFontSize: 12,
    spot_id: "example spot ID",
    backgroundColor: "#EF0606",
    closing_time: null,
    opening_time: null,
    weekly_holiday: null,
    special_holidays: null,
  });

  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [openTools, setOpenTools] = useState(false);
  const [companyId, setCompanyId] = useState(0);
  const [locationId, setLocationId] = useState(0);
  const [activeItem, setActiveItem] = useState({
    threshold: 10,
    color: "#68d391",
    icon: "/Images/aomaru_30.png",
    title: "STOP",
    subTitle: "Please do not enter ",
    type: null,
    company_id: "example_company_id",
    uid: "example_uid",
    location_id: "example_location",
    domain: "example_domain",
    threshold_type: "example_threshold",
    max_people_count: 100,
    iconSize: 0,
    titleFontSize: 24,
    subTitleFontSize: 12,
    spot_id: "example spot ID",
  });

  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      router.push("/login");
    } else {
      setCompanyId(localStorage.getItem("companyId"));
      setLocationId(localStorage.getItem("locationId"));
    }
  }, []);

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
        case "closed":
          setExpandedAccordion("closed");
          setActiveItem(closed);
          break;
        case "holiday":
          setExpandedAccordion("holiday");
          setActiveItem(holiday);
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

  const handleClosedChange = (event) => {
    console.log(event);
    const { name, value } = event.target;

    setClosed((prevData) => ({ ...prevData, [name]: value }));
    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleHolidayChange = (event) => {
    console.log(event);
    const { name, value } = event.target;

    setHoliday((prevData) => ({ ...prevData, [name]: value }));
    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEnter((prevData) => ({ ...prevData, [name]: value }));
    setWarning((prevData) => ({ ...prevData, [name]: value }));
    setStop((prevData) => ({ ...prevData, [name]: value }));
    setClosed((prevData) => ({ ...prevData, [name]: value }));

    setActiveItem((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTimeChange = (name, event) => {
    setClosed((prevData) => ({ ...prevData, [name]: event }));
  };
  const handleWeeklyHolidayChange = (name, event) => {
    setHoliday((prevData) => ({ ...prevData, [name]: event }));
  };

  const onSave = async () => {
    console.log(closed);
    if (enter.spot_id && enter.location_id) {
      if (enter.max_people_count == "") {
        (enter.max_people_count = 100),
          (warning.max_people_count = 100),
          (stop.max_people_count = 100);
        closed.max_people_count = 100;
      }
      try {
        enter.company_id = companyId;
        warning.company_id = companyId;
        stop.company_id = companyId;
        closed.company_id = companyId;
        await Save(enter);
        await Save(warning);
        await Save(stop);
        await Save(closed);

        toast.success("保存に成功しました！!");
      } catch (error) {
        toast.error(
          "保存操作に失敗しました。サポートチームまでご連絡ください。"
        );
        console.log(error);
      }
    } else {
      toast.success("スポットIDとロケーションIDを正しく入力してください。");
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
          label="サンプルiframeコード"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <IconButton onClick={handleCopyClick} edge="end">
                <FileCopyIcon sx={{ color: "#68d391" }} />
              </IconButton>
            ),
          }}
          sx={{ ml: 2, width: "20%" }}
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
        <motion.div
          style={{ display: "flex" }}
          initial={{ width: 0, opacity: 0 }}
          animate={{
            opacity: openTools ? 1 : 0,
            width: openTools ? "100%" : 0,
            transition: { duration: 0.5 },
          }}
        >
          <TextField
            id="outlined-basic"
            label="最大人数"
            type="numeric"
            variant="outlined"
            name="max_people_count"
            value={enter.max_people_count}
            onChange={handleChange}
            sx={{ marginLeft: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="ロケーションID "
            type="numeric"
            variant="outlined"
            name="location_id"
            value={enter.location_id}
            onChange={handleChange}
            sx={{ marginLeft: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="スポットID"
            type="numeric"
            variant="outlined"
            name="spot_id"
            value={enter.spot_id}
            onChange={handleChange}
            sx={{ marginLeft: 2 }}
          />

          <TextField
            id="outlined-basic"
            label="ドメイン名"
            variant="outlined"
            name="domain"
            value={enter.domain}
            onChange={handleChange}
            sx={{ marginLeft: 2 }}
          />
          <ReadOnlyTextField
            //  value={`<iframe src=http://3.109.149.185:3000/home/${companyId}/${locationId}" width="400" height="350" frameborder="0" allowfullscreen></iframe>`}
            value={`<iframe src=http://3.109.149.185:3000/home/${companyId}/${enter.location_id}/${enter.spot_id}" width="400" height="350" frameborder="0" allowfullscreen></iframe>`}
          />
        </motion.div>
        <IconButton
          onClick={() => setOpenTools(!openTools)}
          sx={{ marginLeft: 2, borderRadius: 1 }}
        >
          {openTools && <KeyboardDoubleArrowLeftIcon />}
          {!openTools && <KeyboardDoubleArrowRightIcon />}
        </IconButton>
      </Grid>
      <Grid item xs={12} md={4} paddingX={4}>
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
                  label="タイトル"
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
                  label="サブタイトル"
                  variant="outlined"
                  name="subTitle"
                  value={enter.subTitle}
                  onChange={handleEnterChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="タイトルのサイズ"
                  variant="outlined"
                  name="titleFontSize"
                  value={enter.titleFontSize}
                  onChange={handleEnterChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="サブタイトルのサイズ"
                  variant="outlined"
                  name="subTitleFontSize"
                  value={enter.subTitleFontSize}
                  onChange={handleEnterChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">カラー</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="カラー"
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
                  <InputLabel id="demo-simple-select-label">
                    表示スタイル
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={enter.type}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                    <MenuItem value={"utilization"}>利用率 %</MenuItem>
                    <MenuItem value={"occupancy"}>人数</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコン
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコン"
                    name="icon"
                    value={enter.icon}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"none"}>none</MenuItem>
                    <MenuItem value={"success"}>
                      <Image
                        src={"/Images/aomaru_30.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <Image
                        src={"/Images/aomaru_16.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <Image
                        src={"/Images/aomaru_59.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコンのサイズ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコンのサイズ"
                    name="iconSize"
                    value={enter.iconSize}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    閾値タイプ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={enter.threshold_type}
                    onChange={handleEnterChange}
                  >
                    <MenuItem value={"utilization"}>利用率</MenuItem>
                    <MenuItem value={"occupancy"}>人数</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="閾値"
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
                  label="タイトル"
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
                  label="サブタイトル"
                  variant="outlined"
                  name="subTitle"
                  value={warning.subTitle}
                  onChange={handleWarningChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="タイトルのサイズ"
                  variant="outlined"
                  name="titleFontSize"
                  value={warning.titleFontSize}
                  onChange={handleWarningChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="サブタイトルのサイズ"
                  variant="outlined"
                  name="subTitleFontSize"
                  value={warning.subTitleFontSize}
                  onChange={handleWarningChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">カラー</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="カラー"
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
                  <InputLabel id="demo-simple-select-label">
                    表示スタイル
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={warning.type}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                    <MenuItem value={"utilization"}>利用率 %</MenuItem>
                    <MenuItem value={"occupancy"}>人数</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコン
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコン"
                    name="icon"
                    value={warning.icon}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                    <MenuItem value={"success"}>
                      <Image
                        src={"/Images/aomaru_30.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <Image
                        src={"/Images/aomaru_16.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <Image
                        src={"/Images/aomaru_59.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコンのサイズ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコンのサイズ"
                    name="iconSize"
                    value={warning.iconSize}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    閾値タイプ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={warning.threshold_type}
                    onChange={handleWarningChange}
                  >
                    <MenuItem value={"utilization"}>利用率</MenuItem>
                    <MenuItem value={"occupancy"}>人数</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="閾値"
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
                  label="タイトル"
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
                  label="サブタイトル"
                  variant="outlined"
                  name="subTitle"
                  value={stop.subTitle}
                  onChange={handleStopChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="タイトルのサイズ"
                  variant="outlined"
                  name="titleFontSize"
                  value={stop.titleFontSize}
                  onChange={handleStopChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="サブタイトルのサイズ"
                  variant="outlined"
                  name="subTitleFontSize"
                  value={stop.subTitleFontSize}
                  onChange={handleStopChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">カラー</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="カラー"
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
                  <InputLabel id="demo-simple-select-label">
                    表示スタイル
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={stop.type}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                    <MenuItem value={"utilization"}>利用率 %</MenuItem>
                    <MenuItem value={"occupancy"}>人数</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコン
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコン"
                    name="icon"
                    value={stop.icon}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                    <MenuItem value={"success"}>
                      <Image
                        src={"/Images/aomaru_30.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <Image
                        src={"/Images/aomaru_16.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <Image
                        src={"/Images/aomaru_59.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコンのサイズ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコンのサイズ"
                    name="iconSize"
                    value={stop.iconSize}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    閾値タイプ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Threshold Type"
                    name="threshold_type"
                    value={stop.threshold_type}
                    onChange={handleStopChange}
                  >
                    <MenuItem value={"utilization"}>利用率</MenuItem>
                    <MenuItem value={"occupancy"}>人数</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="閾値"
                  variant="outlined"
                  name="threshold"
                  value={stop.threshold}
                  onChange={handleStopChange}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedAccordion === "closed"}
          onChange={handleAccordionChange("closed")}
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
              Closed
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: `1px solid #fc8181` }}>
            <Grid container xs={12} padding={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="タイトル"
                  variant="outlined"
                  name="title"
                  value={closed.title}
                  onChange={handleClosedChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="サブタイトル"
                  variant="outlined"
                  name="subTitle"
                  value={closed.subTitle}
                  onChange={handleClosedChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="タイトルのサイズ"
                  variant="outlined"
                  name="titleFontSize"
                  value={closed.titleFontSize}
                  onChange={handleClosedChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="サブタイトルのサイズ"
                  variant="outlined"
                  name="subTitleFontSize"
                  value={closed.subTitleFontSize}
                  onChange={handleClosedChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">カラー</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="カラー"
                    name="color"
                    value={closed.color}
                    onChange={handleClosedChange}
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
                  <InputLabel id="demo-simple-select-label">
                    表示スタイル
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={closed.type}
                    onChange={handleClosedChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコン
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコン"
                    name="icon"
                    value={closed.icon}
                    onChange={handleClosedChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                    <MenuItem value={"success"}>
                      <Image
                        src={"/Images/aomaru_30.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <Image
                        src={"/Images/aomaru_16.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <Image
                        src={"/Images/aomaru_59.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコンのサイズ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコンのサイズ"
                    name="iconSize"
                    value={closed.iconSize}
                    onChange={handleClosedChange}
                  >
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="営業終了時間"
                    name="closing_time"
                    value={closed.closing_time}
                    onChange={(event) =>
                      handleTimeChange("closing_time", event)
                    }
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label="営業開始時間"
                    name="opening_time"
                    value={closed.opening_time}
                    onChange={(event) =>
                      handleTimeChange("opening_time", event)
                    }
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedAccordion === "holiday"}
          onChange={handleAccordionChange("holiday")}
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
              Holiday
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: `1px solid #fc8181` }}>
            <Grid container xs={12} padding={2} spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="タイトル"
                  variant="outlined"
                  name="title"
                  value={holiday.title}
                  onChange={handleHolidayChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="サブタイトル"
                  variant="outlined"
                  name="subTitle"
                  value={holiday.subTitle}
                  onChange={handleHolidayChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="タイトルのサイズ"
                  variant="outlined"
                  name="titleFontSize"
                  value={holiday.titleFontSize}
                  onChange={handleHolidayChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="サブタイトルのサイズ"
                  variant="outlined"
                  name="subTitleFontSize"
                  value={holiday.subTitleFontSize}
                  onChange={handleHolidayChange}
                  type="numeric"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">カラー</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="カラー"
                    name="color"
                    value={holiday.color}
                    onChange={handleHolidayChange}
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
                  <InputLabel id="demo-simple-select-label">
                    表示スタイル
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Display Style"
                    name="type"
                    value={holiday.type}
                    onChange={handleHolidayChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコン
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコン"
                    name="icon"
                    value={holiday.icon}
                    onChange={handleHolidayChange}
                  >
                    <MenuItem value={"none"}>無し</MenuItem>
                    <MenuItem value={"success"}>
                      <Image
                        src={"/Images/aomaru_30.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"warning"}>
                      <Image
                        src={"/Images/aomaru_16.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"stop"}>
                      <Image
                        src={"/Images/aomaru_59.png"}
                        width={22}
                        height={22}
                        alt=""
                      />
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    アイコンのサイズ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="アイコンのサイズ"
                    name="iconSize"
                    value={holiday.iconSize}
                    onChange={handleHolidayChange}
                  >
                    <MenuItem value={100}>100</MenuItem>
                    <MenuItem value={200}>200</MenuItem>
                    <MenuItem value={300}>300</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                  週休日
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="週休日"
                    name="weekly_holiday"
                    value={holiday.weekly_holiday}
                    onChange={(event)=> handleWeeklyHolidayChange("weekly_holiday",event)}
                  >
                    <MenuItem value={"monday"}>月曜日</MenuItem>
                    <MenuItem value={"tuesday"}>火曜日</MenuItem>
                    <MenuItem value={"wednesday"}>水曜日</MenuItem>
                    <MenuItem value={"thursday"}>木曜日</MenuItem>
                    <MenuItem value={"friday"}>金曜日</MenuItem>
                    <MenuItem value={"saturday"}>土曜日</MenuItem>
                    <MenuItem value={"sunday"}>日曜日</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="特別な休日"
                    name="special_holidays"
                    value={holiday.special_holidays}
                    onChange={(event) =>
                      handleTimeChange("special_holidays", event)
                    }
                  />
                </LocalizationProvider>
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
            保存する
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={8} padding={2} height={"80vh"}>
        <Demo
          title={activeItem?.title}
          subTitle={activeItem?.subTitle}
          icon={activeItem.icon}
          threshold={activeItem?.threshold}
          color={activeItem?.color}
          type={activeItem?.type}
          iconSize={activeItem?.iconSize}
          titleFontSize={activeItem?.titleFontSize}
          subTitleFontSize={activeItem?.subTitleFontSize}
          max_capacity={enter.max_people_count}
          backgroundColor={activeItem.backgroundColor}
        />
      </Grid>
    </Grid>
  );
};

export default Tools;
