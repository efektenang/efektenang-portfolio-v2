'use client'

import { Modal } from 'antd'
import React, { useState } from 'react'

interface IModalCustom {
  isOpen: boolean
  setIsOpen?: (v: boolean) => void
}

export default function ModalCustom(props: IModalCustom): React.JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="System Alert!"
      closable={true}
      open={isModalOpen}
      footer={false}
      onCancel={handleCancel}
      centered

      width={400}
    >
      Please use a tablet or desktop screen for a best experience.
    </Modal>
  )
}
