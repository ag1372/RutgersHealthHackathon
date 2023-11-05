<script>
export default {
  name: 'VideoChat',
}
import DigitalSambaEmbedded from '@digitalsamba/embedded-sdk';
const sambaFrame = DigitalSambaEmbedded.createControl({ url: 'https://telemed.digitalsamba.com/demo-room'});
sambaFrame.load();
</script>

<div>

  
</div>