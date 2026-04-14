import { type CodegenConfigOptions } from '@accelbyte/codegen'

export default {
  shouldProduceIndexFiles: false,
  splitOutputByServiceName: true,
  overrideAsAny: {
    ProtobufAny: true
  }
} satisfies CodegenConfigOptions
