"use client";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Fragment, useRef, useState } from 'react'

export default function Contact({ open, setOpen , cancelButtonRef}: {open: boolean, setOpen: any , cancelButtonRef: any}) {

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className='border border-dashed h-[70vh] w-[30vw]'>

        </div>

     
      </Dialog>
    </Transition.Root>
  )
}
