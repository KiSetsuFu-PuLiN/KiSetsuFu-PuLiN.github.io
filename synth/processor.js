class SynthProcessor extends AudioWorkletProcessor {
  process(_inputs, outputs) {
    for (const output of outputs) {
      for (const channel of output) {
        channel.fill(0);
      }
    }

    return true;
  }
}

registerProcessor("synth-processor", SynthProcessor);
