import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import BootstrapInput from "../BootstrapInput";
import CustomSelect from "../CustomSelect";
import BootstrapSelectInput from "../CustomSelect";
import { IoIosArrowDown } from "react-icons/io";

const MemberModal = ({ show, onHide, modalMode = "add", data }) => {
  const [value, setValue] = useState("");
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800/10 backdrop-blur-sm flex items-center justify-center z-1100"
      onClick={onHide}
    >
      <div class="relative p-[1px] w-full max-w-[400px] min-w-[300px] rounded-[12px] bg-gradient-to-br from-[#0058E8] to-[#00318200]">
        <div
          className="bg-[var(--bgcardcontainer)] rounded-[12px] c-primarys shadow-lg p-6 "
          onClick={(e) => e.stopPropagation()}
        >
        <Typography variant="h6" component="h2" className="c-primary">
          {modalMode === "add" ? "New Member" : "Edit Member"}
        </Typography>

        <Box className="flex flex-col gap-4 mt-5 ">
          <Box className="flex gap-3 w-full">
            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="first-name"
                className="text-sm c-secondary"
              >
                First Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter first name"
                type="text"
                id="first-name"
                defaultValue={data?.firstName || ""}
              />
            </FormControl>

            <FormControl fullWidth variant="standard">
              <InputLabel
                shrink
                htmlFor="last-name"
                className="text-sm c-secondary"
              >
                Last Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter last name"
                type="text"
                id="last-name"
                defaultValue={data?.lastName || ""}
              />
            </FormControl>
          </Box>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Phone Number
            </InputLabel>
            <BootstrapInput
              placeholder="+924749749894"
              type="email"
              id="role"
              defaultValue={data?.role || ""}
            />
          </FormControl>
          <FormControl fullWidth variant="standard">
            <InputLabel shrink htmlFor="role" className="text-sm c-secondary">
              Email
            </InputLabel>
            <BootstrapInput
              placeholder="Enter email"
              type="email"
              id="role"
              defaultValue={data?.role || ""}
            />
          </FormControl>
          <hr className="w-full border-t border-[var(--borderColor)] mt-5" />
          <Box className="flex gap-3 mt-4 justify-end">
            <button
              className="text-sm font-semibold c-primary bg-[var(--bgcardcontainer)] border border-[var(--borderColor)] c-inverted py-3 px-4 rounded-[12px]"
              onClick={() => onHide()}
            >
              Cancel
            </button>
            <button
              className="text-sm font-semibold bg-navlink border border-[var(--catblue)] c-inverted py-3 px-4 rounded-[12px]"
              onClick={() => onHide()}
            >
              Save
            </button>
          </Box>
        </Box>
      </div>
      </div>
    </div>
  );
};

export default MemberModal;
