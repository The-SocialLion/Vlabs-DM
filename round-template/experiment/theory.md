### **Introduction**
The purpose of this experiment is to learn about the Delta modulation (DM) and demodulation principles, as well as how sampled signals are quantized using a 1 bit quantizer to reduce transmission bandwidth and then transmitted. A reconstruction filter is used to recover the baseband signal from the error signal at the receiver portion. This experiment also shows the many sounds that can occur when the amplitude values of a baseband signal are incorrectly chosen, such as slope overload distortion (rapid fluctuating baseband signal) and granular noise (slow varying baseband signal).

### **Equations/formulas**:

| **Theory**     | **Formulae** |   **Description**|
| :-----------: | :------------: | :-----------: |
Sampling rate                                   | f<sub>s</sub>>2f<sub>m</sub>                       | f<sub>s</sub>→sampling rate<br/>f<sub>m</sub>→modulating frequency |
Bandwidth                                      | B=mf<sub>s</sub>/2                      | m→number of bits<br/>f<sub>s</sub>→sampling rate |
Power (Pmax)                                    | Pmax=∆<sup>2</sup>/8π<sup>2</sup>f<sub>m</sub><sup>2</sup>T<sup>2</sup> | ∆→step size<br/>T<sub>m</sub>→sampling time period |
Condition to avoid slope overload distortion    | A<sub>m</sub>≤∆/2πf<sub>m</sub>T<sub>s</sub>           | A<sub>m</sub>→Amplitude of the message signal |
Signal to Quantization Noise ratio, SQNR        | SQNR=3f<sub>s</sub><sup>3</sup>/8π<sup>2</sup>f<sub>m</sub><sup>2</sup>W     | W→f<sub>s</sub>/2<br/>f<sub>m</sub>→maximum frequency of message signal |


### **Flowchart** :

![Flow Chart](./images/flowchart.png)

Fig 1: Flowchart

### **Function of the equipment's  required to perform Pulse Code Modulation/Demodulation for each type.**

### Sine wave generator:
This block is used to generate the sinusoidal input signal of frequency ‘fm’ Hz and amplitude ‘A’ volts.

![Block](./images/sinegen.png)

Fig 2: Sine wave generator

### **Sampler:**
The input analog signal is converted into discrete time signal using a sampler block. The narrow rectangular pulses produced by sampler is used to vary the number of samples in an analog signal. The sampling frequency produced by this block is greater than twice the input analog signal frequency ‘fm’.

![Block](./images/sampler.png)

Fig 3: Sampler

### **1-bit Quantizer:**
The discrete time signal from the sampler is converted into discrete amplitude signal using quantizer block.

![Block](./images/one-bit-quantizer.png)

Fig 4: One-Bit quantizer

### **Encoder:**
The discrete time and amplitude signal is converted into digital by encoder block. It produces the ‘1’-bit binary equivalent of the input sample value. The number of bits at the encoder output determines the signal to quantization noise ratio of DM system.

![Block](./images/encoder.png)

Fig 5: Encoder

### **Decoder:**
The DM wave is converted into quantized PAM using this block. It converts digital data into discrete time- amplitude signal.

![Block](./images/decoder.png)

Fig 6: Decoder

### **Reconstruction filter:**
Reconstruction filter is the low pass filter with a cut off frequency of ‘fm’ Hz. It allows the analog signal of frequency ‘fm’ and discard all the high frequency components.

![Block](./images/prediction-filter.png)

Fig 7: Prediction filter to reconstruct signal

### **Evaluate:**
This block is used to analyse the DM parameters such as delta, transmission bandwidth, Signaling rate and signal to quantization noise ratio (SQNR) for the input signal.

![Block](./images/evaluate.png)

Fig 8: Block to display output

### **Advantages of Delta Modulation:**

1) Since, the delta modulation transmits only one bit for one sample, therefore the signaling rate and transmission channel bandwidth is quite small for delta modulation compared to PCM .
2) The transmitter and receiver implementation is very much simple for delta modulation. There is no analog to digital converter required in delta modulation.


### **Disadvantages of Delta Modulation:**

1) Slope overload distortion
2) Granular or idle noise


### **Practical Applications of Amplitude Modulation:**
1) Telephony.
2) Satellite communication system.
