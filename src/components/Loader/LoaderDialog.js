import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent';
import PropTypes from 'prop-types'
import './Loader.scss'
import Loader from './Loader'

const LoaderDialog = ({ open, title, message }) => {
  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent className='loader-dialog-content'>
          <div className='loader-dialog-description'>
            <Loader hasWhiteBackground={true} />
            <div className='loader-dialog-title'>{title}</div>
            <div className='loader-dialog-message'>{message}</div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

LoaderDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default LoaderDialog
