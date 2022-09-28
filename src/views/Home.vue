<template>
    <div class="container custom-container">
    <h3>Project</h3>
    
    
        <div class="stepwizard">
            <div class="stepwizard-row setup-panel">
                <div class="stepwizard-step col-xs-6 text-left"> 
                    <a href="#step-1" type="button" class="btn btn-success btn-circle">1</a>
                    <p class="wizard-1-content">Configuration</p>
                </div>
                <div class="stepwizard-step col-xs-6 text-right"> 
                <p class="wizard-2-content">Summary</p>
                    <a href="#step-2" type="button" class="btn btn-circle wizard-2-circle" disabled="disabled">2</a>
                    
                </div>
                
            </div>
        </div>
        
        <WizardForm />
    
    </div>
    
      </template>
    
    <script>
    import WizardForm from '../components/WizardForm.vue'
    
    export default {
        components: {
        WizardForm
        }
    }
    </script>
      
      