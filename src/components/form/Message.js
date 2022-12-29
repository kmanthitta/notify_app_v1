import { TextField, Typography } from "@mui/material";

export const Message = (props) => {
  return (
    <div className="flex flex-col mt-5">
      <Typography>Notification message</Typography>
      <TextField
        value={props.message}
        onChange={props.handleMessageChange}
        size="small"
        multiline
        rows={4}
        fullWidth
        error={props.errors.message.length > 0}
        helperText={props.errors.message}
        FormHelperTextProps={{ style: { textAlign: "center" } }}
      />
    </div>
  );
};
