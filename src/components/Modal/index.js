import React from 'react';

// import { Container } from './styles';

export default function Modal() {
  return (
    <>
        <div id="modal-container">
            <div class="modal-background">
                <div class="modal">
                    <h2>I'm a Modal</h2>
                    <p>Hear me roar.</p>
                    <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                        <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                    </svg>
                </div>
            </div>
        </div>
      <div class="content">
        <h1>Modal Animations</h1>
          <div class="buttons">
            <div id="six" class="button">Sketch</div>
          </div>
      </div>
    </>
  );
}
