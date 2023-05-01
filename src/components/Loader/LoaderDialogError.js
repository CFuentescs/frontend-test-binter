import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types'
/* Storybook */
import {
  Button,
} from '@binter/inputs'


const LoaderDialogError = ({ open, title, message, iconComp, iconComponent,close }) => {
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent className='loader-dialog-content'>
          <div className='loader-dialog-description' align='center'>
            {iconComponent}
            <br />
            <div className='loader-dialog-title'>{title}</div>
            <div className='loader-dialog-message'>{message}</div>
            <br />
            <Button
              buttonStyle='secondary'
              label='Cerrar'
              type='button'
              onClick={close}
            />
          </div>
          
        </DialogContent>
      </Dialog>
    </div>
  )
}

LoaderDialogError.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default LoaderDialogError
