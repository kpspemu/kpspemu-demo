(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kmem-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kmem-js'.");
    }
    root['kmem-js'] = factory(typeof this['kmem-js'] === 'undefined' ? {} : this['kmem-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var get_indices = Kotlin.kotlin.collections.get_indices_964n91$;
  var toByte = Kotlin.toByte;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparable = Kotlin.kotlin.Comparable;
  var toShort = Kotlin.toShort;
  var toChar = Kotlin.toChar;
  var toRawBits = Kotlin.floatToRawBits;
  var toRawBits_0 = Kotlin.doubleToRawBits;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_355ntz$;
  var get_indices_1 = Kotlin.kotlin.collections.get_indices_i2lc79$;
  var get_indices_2 = Kotlin.kotlin.collections.get_indices_tmsbgo$;
  var get_indices_3 = Kotlin.kotlin.collections.get_indices_se6h4x$;
  var get_indices_4 = Kotlin.kotlin.collections.get_indices_rjqryz$;
  var get_indices_5 = Kotlin.kotlin.collections.get_indices_bvy38s$;
  function ByteArrayBuffer(data, size) {
    if (size === void 0)
      size = data.length;
    this.data = data;
    this._size_0 = size;
  }
  Object.defineProperty(ByteArrayBuffer.prototype, 'size', {
    get: function () {
      return this._size_0;
    },
    set: function (len) {
      this.ensure_za3lpa$(len);
      this._size_0 = len;
    }
  });
  var Math_0 = Math;
  ByteArrayBuffer.prototype.ensure_za3lpa$ = function (expected) {
    if (this.data.length < expected) {
      var tmp$ = this.data;
      var b = (this.data.length + 7 | 0) * 5 | 0;
      this.data = copyOf(tmp$, Math_0.max(expected, b));
    }
    var a = this.size;
    this._size_0 = Math_0.max(a, expected);
  };
  ByteArrayBuffer.prototype.toByteArraySlice_s8cxhz$ = function (position) {
    if (position === void 0)
      position = Kotlin.Long.ZERO;
    return new ByteArraySlice(this.data, position.toInt(), this.size);
  };
  ByteArrayBuffer.prototype.toByteArray = function () {
    return copyOf(this.data, this.size);
  };
  ByteArrayBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayBuffer',
    interfaces: []
  };
  function ByteArrayBuffer_init(initialCapacity, $this) {
    if (initialCapacity === void 0)
      initialCapacity = 4096;
    $this = $this || Object.create(ByteArrayBuffer.prototype);
    ByteArrayBuffer.call($this, new Int8Array(initialCapacity), 0);
    return $this;
  }
  function ByteArraySlice(data, position, length) {
    ByteArraySlice$Companion_getInstance();
    this.data = data;
    this.position = position;
    this.length = length;
  }
  ByteArraySlice.prototype.getPointer = function () {
    return new Pointer(this.data, this.position);
  };
  ByteArraySlice.prototype.toString = function () {
    return 'ByteArraySlice(data=' + this.data + ', position=' + this.position + ', length=' + this.length + ')';
  };
  ByteArraySlice.prototype.get_za3lpa$ = function (n) {
    return this.data[this.position + n | 0];
  };
  ByteArraySlice.prototype.set_6t1wet$ = function (n, value) {
    this.data[this.position + n | 0] = value;
  };
  function ByteArraySlice$Companion() {
    ByteArraySlice$Companion_instance = this;
  }
  ByteArraySlice$Companion.prototype.create_4p0eoe$ = function (start, end) {
    if (!equals(start.ba, end.ba))
      throw new RuntimeException('Pointer must reference the samea array');
    return new ByteArraySlice(start.ba, start.offset, end.offset - start.offset | 0);
  };
  ByteArraySlice$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ByteArraySlice$Companion_instance = null;
  function ByteArraySlice$Companion_getInstance() {
    if (ByteArraySlice$Companion_instance === null) {
      new ByteArraySlice$Companion();
    }
    return ByteArraySlice$Companion_instance;
  }
  ByteArraySlice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArraySlice',
    interfaces: []
  };
  function toByteArraySlice($receiver) {
    return new ByteArraySlice($receiver, 0, $receiver.length);
  }
  function contains($receiver, other) {
    return indexOf($receiver, other) >= 0;
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function indexOf($receiver, other) {
    var tmp$;
    var full = $receiver;
    tmp$ = full.length - other.length | 0;
    for (var n = 0; n < tmp$; n++) {
      var $receiver_0 = get_indices(other);
      var all$result;
      all$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (!(full[n + element | 0] === other[element])) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      if (all$result) {
        return n;
      }
    }
    return -1;
  }
  var Int8Array_init = Int8Array;
  var Int16Array_init = Int16Array;
  var Int32Array_init = Int32Array;
  var Float32Array_init = Float32Array;
  function FastMemory(buffer, size) {
    FastMemory$Companion_getInstance();
    this.buffer = buffer;
    this.size = size;
    this.data = getData(this.buffer);
    var $receiver = this.buffer;
    this.i8 = new Int8Array_init($receiver, 0 * 1 | 0, ($receiver.byteLength / 1 | 0) - 0 | 0);
    var $receiver_0 = this.buffer;
    this.i16 = new Int16Array_init($receiver_0, 0 * 2 | 0, ($receiver_0.byteLength / 2 | 0) - 0 | 0);
    var $receiver_1 = this.buffer;
    this.i32 = new Int32Array_init($receiver_1, 0 * 4 | 0, ($receiver_1.byteLength / 4 | 0) - 0 | 0);
    var $receiver_2 = this.buffer;
    this.f32 = new Float32Array_init($receiver_2, 0 * 4 | 0, ($receiver_2.byteLength / 4 | 0) - 0 | 0);
  }
  function FastMemory$Companion() {
    FastMemory$Companion_instance = this;
  }
  var ArrayBuffer_init = ArrayBuffer;
  FastMemory$Companion.prototype.alloc_za3lpa$ = function (size) {
    return new FastMemory(new ArrayBuffer_init((size + 15 & ~15) + 15 & ~15), size);
  };
  FastMemory$Companion.prototype.wrap_t771ee$ = function (buffer, size) {
    if (size === void 0) {
      size = buffer.byteLength;
    }
    return new FastMemory(buffer, size);
  };
  FastMemory$Companion.prototype.wrap_fqrh44$ = function (array) {
    return new FastMemory(array.buffer, array.length);
  };
  FastMemory$Companion.prototype.invoke_za3lpa$ = function (size) {
    return new FastMemory(new ArrayBuffer_init((size + 15 & ~15) + 15 & ~15), size);
  };
  FastMemory$Companion.prototype.invoke_t771ee$ = function (buffer, size) {
    if (size === void 0) {
      size = buffer.byteLength;
    }
    return new FastMemory(buffer, size);
  };
  FastMemory$Companion.prototype.invoke_fqrh44$ = function (array) {
    return new FastMemory(array.buffer, array.length);
  };
  FastMemory$Companion.prototype.copy_6nl2fg$ = function (src, srcPos, dst, dstPos, length) {
    arraycopy_22(src.buffer, srcPos, dst.buffer, dstPos, length);
  };
  FastMemory$Companion.prototype.copy_gdhaq5$ = function (src, srcPos, dst, dstPos, length) {
    arraycopy_24(src.buffer, srcPos, dst, dstPos, length);
  };
  FastMemory$Companion.prototype.copy_rpsfpp$ = function (src, srcPos, dst, dstPos, length) {
    arraycopy_23(src, srcPos, dst.buffer, dstPos, length);
  };
  FastMemory$Companion.prototype.copyAligned_1r3iht$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_26(src.buffer, srcPosAligned, dst, dstPosAligned, length);
  };
  FastMemory$Companion.prototype.copyAligned_ec07zh$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_25(src, srcPosAligned, dst.buffer, dstPosAligned, length);
  };
  FastMemory$Companion.prototype.copyAligned_xsanf2$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_28(src.buffer, srcPosAligned, dst, dstPosAligned, length);
  };
  FastMemory$Companion.prototype.copyAligned_9zdxkw$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_27(src, srcPosAligned, dst.buffer, dstPosAligned, length);
  };
  FastMemory$Companion.prototype.copyAligned_lv4inz$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_30(src.buffer, srcPosAligned, dst, dstPosAligned, length);
  };
  FastMemory$Companion.prototype.copyAligned_67h4tv$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_29(src, srcPosAligned, dst.buffer, dstPosAligned, length);
  };
  FastMemory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FastMemory$Companion_instance = null;
  function FastMemory$Companion_getInstance() {
    if (FastMemory$Companion_instance === null) {
      new FastMemory$Companion();
    }
    return FastMemory$Companion_instance;
  }
  FastMemory.prototype.get_za3lpa$ = function (index) {
    return this.i8[index] & 255;
  };
  FastMemory.prototype.set_vux9f0$ = function (index, value) {
    this.i8[index] = toByte(value);
  };
  FastMemory.prototype.setAlignedInt16_2bqt6h$ = function (index, value) {
    this.i16[index] = value;
  };
  FastMemory.prototype.getAlignedInt16_za3lpa$ = function (index) {
    return this.i16[index];
  };
  FastMemory.prototype.setAlignedInt32_vux9f0$ = function (index, value) {
    this.i32[index] = value;
  };
  FastMemory.prototype.getAlignedInt32_za3lpa$ = function (index) {
    return this.i32[index];
  };
  FastMemory.prototype.setAlignedFloat32_24o109$ = function (index, value) {
    this.f32[index] = value;
  };
  FastMemory.prototype.getAlignedFloat32_za3lpa$ = function (index) {
    return this.f32[index];
  };
  FastMemory.prototype.getInt16_za3lpa$ = function (index) {
    return getShort(this.data, index);
  };
  FastMemory.prototype.setInt16_2bqt6h$ = function (index, value) {
    setShort(this.data, index, value);
  };
  FastMemory.prototype.setInt32_vux9f0$ = function (index, value) {
    setInt(this.data, index, value);
  };
  FastMemory.prototype.getInt32_za3lpa$ = function (index) {
    return getInt(this.data, index);
  };
  FastMemory.prototype.setFloat32_24o109$ = function (index, value) {
    setFloat(this.data, index, value);
  };
  FastMemory.prototype.getFloat32_za3lpa$ = function (index) {
    return getFloat(this.data, index);
  };
  FastMemory.prototype.setArrayInt8_3fge6q$ = function (dstPos, src, srcPos, len) {
    FastMemory$Companion_getInstance().copy_rpsfpp$(src, srcPos, this, dstPos, len);
  };
  FastMemory.prototype.setAlignedArrayInt8_3fge6q$ = function (dstPos, src, srcPos, len) {
    FastMemory$Companion_getInstance().copy_rpsfpp$(src, srcPos, this, dstPos, len);
  };
  FastMemory.prototype.setAlignedArrayInt16_r43jz4$ = function (dstPos, src, srcPos, len) {
    FastMemory$Companion_getInstance().copyAligned_ec07zh$(src, srcPos, this, dstPos, len);
  };
  FastMemory.prototype.setAlignedArrayInt32_coga0j$ = function (dstPos, src, srcPos, len) {
    FastMemory$Companion_getInstance().copyAligned_9zdxkw$(src, srcPos, this, dstPos, len);
  };
  FastMemory.prototype.setAlignedArrayFloat32_3hvitc$ = function (dstPos, src, srcPos, len) {
    FastMemory$Companion_getInstance().copyAligned_67h4tv$(src, srcPos, this, dstPos, len);
  };
  FastMemory.prototype.getArrayInt8_3fge6q$ = function (srcPos, dst, dstPos, len) {
    FastMemory$Companion_getInstance().copy_gdhaq5$(this, srcPos, dst, dstPos, len);
  };
  FastMemory.prototype.getAlignedArrayInt8_3fge6q$ = function (srcPos, dst, dstPos, len) {
    FastMemory$Companion_getInstance().copy_gdhaq5$(this, srcPos, dst, dstPos, len);
  };
  FastMemory.prototype.getAlignedArrayInt16_r43jz4$ = function (srcPos, dst, dstPos, len) {
    FastMemory$Companion_getInstance().copyAligned_1r3iht$(this, srcPos, dst, dstPos, len);
  };
  FastMemory.prototype.getAlignedArrayInt32_coga0j$ = function (srcPos, dst, dstPos, len) {
    FastMemory$Companion_getInstance().copyAligned_xsanf2$(this, srcPos, dst, dstPos, len);
  };
  FastMemory.prototype.getAlignedArrayFloat32_3hvitc$ = function (srcPos, dst, dstPos, len) {
    FastMemory$Companion_getInstance().copyAligned_lv4inz$(this, srcPos, dst, dstPos, len);
  };
  FastMemory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FastMemory',
    interfaces: []
  };
  function Kmem() {
    Kmem_instance = this;
    this.VERSION = KMEM_VERSION;
  }
  Kmem.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Kmem',
    interfaces: []
  };
  var Kmem_instance = null;
  function Kmem_getInstance() {
    if (Kmem_instance === null) {
      new Kmem();
    }
    return Kmem_instance;
  }
  var sliceInt8Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.sliceInt8Buffer_3gn6rj$', wrapFunction(function () {
    var Int8Array_init = Int8Array;
    return function ($receiver, offset, size) {
      if (offset === void 0)
        offset = 0;
      if (size === void 0) {
        size = ($receiver.byteLength / 1 | 0) - offset | 0;
      }
      return new Int8Array_init($receiver, offset * 1 | 0, size);
    };
  }));
  var sliceInt16Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.sliceInt16Buffer_3gn6rj$', wrapFunction(function () {
    var Int16Array_init = Int16Array;
    return function ($receiver, offset, size) {
      if (offset === void 0)
        offset = 0;
      if (size === void 0) {
        size = ($receiver.byteLength / 2 | 0) - offset | 0;
      }
      return new Int16Array_init($receiver, offset * 2 | 0, size);
    };
  }));
  var sliceInt32Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.sliceInt32Buffer_3gn6rj$', wrapFunction(function () {
    var Int32Array_init = Int32Array;
    return function ($receiver, offset, size) {
      if (offset === void 0)
        offset = 0;
      if (size === void 0) {
        size = ($receiver.byteLength / 4 | 0) - offset | 0;
      }
      return new Int32Array_init($receiver, offset * 4 | 0, size);
    };
  }));
  var sliceFloat32Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.sliceFloat32Buffer_3gn6rj$', wrapFunction(function () {
    var Float32Array_init = Float32Array;
    return function ($receiver, offset, size) {
      if (offset === void 0)
        offset = 0;
      if (size === void 0) {
        size = ($receiver.byteLength / 4 | 0) - offset | 0;
      }
      return new Float32Array_init($receiver, offset * 4 | 0, size);
    };
  }));
  var sliceFloat64Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.sliceFloat64Buffer_3gn6rj$', wrapFunction(function () {
    var Float64Array_init = Float64Array;
    return function ($receiver, offset, size) {
      if (offset === void 0)
        offset = 0;
      if (size === void 0) {
        size = ($receiver.byteLength / 8 | 0) - offset | 0;
      }
      return new Float64Array_init($receiver, offset * 8 | 0, size);
    };
  }));
  var asInt8Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt8Buffer_qfdq9h$', wrapFunction(function () {
    var Int8Array_init = Int8Array;
    return function ($receiver) {
      return new Int8Array_init($receiver, 0 * 1 | 0, ($receiver.byteLength / 1 | 0) - 0 | 0);
    };
  }));
  var asInt16Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt16Buffer_qfdq9h$', wrapFunction(function () {
    var Int16Array_init = Int16Array;
    return function ($receiver) {
      return new Int16Array_init($receiver, 0 * 2 | 0, ($receiver.byteLength / 2 | 0) - 0 | 0);
    };
  }));
  var asInt32Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt32Buffer_qfdq9h$', wrapFunction(function () {
    var Int32Array_init = Int32Array;
    return function ($receiver) {
      return new Int32Array_init($receiver, 0 * 4 | 0, ($receiver.byteLength / 4 | 0) - 0 | 0);
    };
  }));
  var asFloat32Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.asFloat32Buffer_qfdq9h$', wrapFunction(function () {
    var Float32Array_init = Float32Array;
    return function ($receiver) {
      return new Float32Array_init($receiver, 0 * 4 | 0, ($receiver.byteLength / 4 | 0) - 0 | 0);
    };
  }));
  var asFloat64Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem.asFloat64Buffer_qfdq9h$', wrapFunction(function () {
    var Float64Array_init = Float64Array;
    return function ($receiver) {
      return new Float64Array_init($receiver, 0 * 8 | 0, ($receiver.byteLength / 8 | 0) - 0 | 0);
    };
  }));
  var Int8BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Int8BufferAlloc_za3lpa$', wrapFunction(function () {
    var ArrayBuffer_init = ArrayBuffer;
    var Int8Array_init = Int8Array;
    return function (size) {
      var $receiver = new ArrayBuffer_init((size * 1 | 0) + 15 & ~15);
      return new Int8Array_init($receiver, 0 * 1 | 0, ($receiver.byteLength / 1 | 0) - 0 | 0);
    };
  }));
  function subarray($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return new Int8Array_init($receiver.buffer, (($receiver.byteOffset / 1 | 0) + begin | 0) * 1 | 0, end - begin | 0);
  }
  var Int16BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Int16BufferAlloc_za3lpa$', wrapFunction(function () {
    var ArrayBuffer_init = ArrayBuffer;
    var Int16Array_init = Int16Array;
    return function (size) {
      var $receiver = new ArrayBuffer_init((size * 2 | 0) + 15 & ~15);
      return new Int16Array_init($receiver, 0 * 2 | 0, ($receiver.byteLength / 2 | 0) - 0 | 0);
    };
  }));
  function subarray_0($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return new Int16Array_init($receiver.buffer, (($receiver.byteOffset / 2 | 0) + begin | 0) * 2 | 0, end - begin | 0);
  }
  var Int32BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Int32BufferAlloc_za3lpa$', wrapFunction(function () {
    var ArrayBuffer_init = ArrayBuffer;
    var Int32Array_init = Int32Array;
    return function (size) {
      var $receiver = new ArrayBuffer_init((size * 4 | 0) + 15 & ~15);
      return new Int32Array_init($receiver, 0 * 4 | 0, ($receiver.byteLength / 4 | 0) - 0 | 0);
    };
  }));
  function subarray_1($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return new Int32Array_init($receiver.buffer, (($receiver.byteOffset / 4 | 0) + begin | 0) * 4 | 0, end - begin | 0);
  }
  var Float32BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Float32BufferAlloc_za3lpa$', wrapFunction(function () {
    var ArrayBuffer_init = ArrayBuffer;
    var Float32Array_init = Float32Array;
    return function (size) {
      var $receiver = new ArrayBuffer_init((size * 4 | 0) + 15 & ~15);
      return new Float32Array_init($receiver, 0 * 4 | 0, ($receiver.byteLength / 4 | 0) - 0 | 0);
    };
  }));
  function subarray_2($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return new Float32Array_init($receiver.buffer, (($receiver.byteOffset / 4 | 0) + begin | 0) * 4 | 0, end - begin | 0);
  }
  var Float64BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Float64BufferAlloc_za3lpa$', wrapFunction(function () {
    var ArrayBuffer_init = ArrayBuffer;
    var Float64Array_init = Float64Array;
    return function (size) {
      var $receiver = new ArrayBuffer_init((size * 8 | 0) + 15 & ~15);
      return new Float64Array_init($receiver, 0 * 8 | 0, ($receiver.byteLength / 8 | 0) - 0 | 0);
    };
  }));
  var Float64Array_init = Float64Array;
  function subarray_3($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return new Float64Array_init($receiver.buffer, (($receiver.byteOffset / 8 | 0) + begin | 0) * 8 | 0, end - begin | 0);
  }
  function arraycopy(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 1 | 0, dst.buffer, dstPos * 1 | 0, size * 1 | 0);
  }
  function arraycopy_0(src, srcPos, dst, dstPos, size) {
    arraycopy_23(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_1(src, srcPos, dst, dstPos, size) {
    arraycopy_24(src.buffer, srcPos, dst, dstPos, size);
  }
  function arraycopy_2(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 2 | 0, dst.buffer, dstPos * 2 | 0, size * 2 | 0);
  }
  function arraycopy_3(src, srcPos, dst, dstPos, size) {
    arraycopy_25(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_4(src, srcPos, dst, dstPos, size) {
    arraycopy_26(src.buffer, srcPos, dst, dstPos, size);
  }
  function arraycopy_5(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 4 | 0, dst.buffer, dstPos * 4 | 0, size * 4 | 0);
  }
  function arraycopy_6(src, srcPos, dst, dstPos, size) {
    arraycopy_27(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_7(src, srcPos, dst, dstPos, size) {
    arraycopy_28(src.buffer, srcPos, dst, dstPos, size);
  }
  function arraycopy_8(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 4 | 0, dst.buffer, dstPos * 4 | 0, size * 4 | 0);
  }
  function arraycopy_9(src, srcPos, dst, dstPos, size) {
    arraycopy_29(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_10(src, srcPos, dst, dstPos, size) {
    arraycopy_30(src.buffer, srcPos, dst, dstPos, size);
  }
  function arraycopy_11(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 8 | 0, dst.buffer, dstPos * 8 | 0, size * 8 | 0);
  }
  function arraycopy_12(src, srcPos, dst, dstPos, size) {
    arraycopy_31(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_13(src, srcPos, dst, dstPos, size) {
    arraycopy_32(src.buffer, srcPos, dst, dstPos, size);
  }
  function fill($receiver, value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = $receiver.length;
    _fill($receiver, value, start, end);
  }
  function fill_0($receiver, value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = $receiver.length;
    _fill_0($receiver, value, start, end);
  }
  function fill_1($receiver, value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = $receiver.length;
    _fill_1($receiver, value, start, end);
  }
  var fill_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_6mk3ue$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var fill_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_htcctw$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var fill_4 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_tpuxuu$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var fill_5 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_nwy378$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var fill_6 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_x4f2cq$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var KMEM_VERSION;
  function Pointer(ba, offset) {
    if (offset === void 0)
      offset = 0;
    this.ba = ba;
    this.offset = offset;
  }
  Pointer.prototype.inc = function () {
    var tmp$;
    return tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$;
  };
  Pointer.prototype.dec = function () {
    var tmp$;
    return tmp$ = this.offset, this.offset = tmp$ - 1 | 0, tmp$;
  };
  Pointer.prototype.getU8 = function () {
    return this.ba[this.offset] & 255;
  };
  Pointer.prototype.setU8_za3lpa$ = function (v) {
    this.ba[this.offset] = toByte(v);
  };
  Pointer.prototype.readU8 = function () {
    var tmp$;
    return this.ba[tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$] & 255;
  };
  Pointer.prototype.writeU8_za3lpa$ = function (v) {
    var tmp$;
    this.ba[tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$] = toByte(v);
  };
  Pointer.prototype.plus_za3lpa$ = function (offset) {
    return new Pointer(this.ba, this.offset + offset | 0);
  };
  Pointer.prototype.minus_2s8qsv$ = function (that) {
    return this.offset - that.offset | 0;
  };
  Pointer.prototype.setAdd_6n5hb$ = function (that, add) {
    this.offset = that.offset + add | 0;
  };
  Pointer.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.offset, other.offset);
  };
  Pointer.prototype.take_za3lpa$ = function (count) {
    return new ByteArraySlice(this.ba, this.offset, count);
  };
  Pointer.prototype.toString = function () {
    return 'Pointer(' + this.ba + ', ' + this.offset + ')';
  };
  Pointer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pointer',
    interfaces: [Comparable]
  };
  function _read8($receiver, o) {
    return $receiver[o];
  }
  function _read16_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8;
  }
  function _read24_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16;
  }
  function _read32_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16 | readU8($receiver, o + 3 | 0) << 24;
  }
  function _read64_le($receiver, o) {
    var o_0 = o + 0 | 0;
    var o_1 = o + 4 | 0;
    return toUnsigned_0(readU8($receiver, o_0 + 0 | 0) << 0 | readU8($receiver, o_0 + 1 | 0) << 8 | readU8($receiver, o_0 + 2 | 0) << 16 | readU8($receiver, o_0 + 3 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 0 | 0) << 0 | readU8($receiver, o_1 + 1 | 0) << 8 | readU8($receiver, o_1 + 2 | 0) << 16 | readU8($receiver, o_1 + 3 | 0) << 24).shiftLeft(32));
  }
  function _read16_be($receiver, o) {
    return readU8($receiver, o + 1 | 0) << 0 | readU8($receiver, o + 0 | 0) << 8;
  }
  function _read24_be($receiver, o) {
    return readU8($receiver, o + 2 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 0 | 0) << 16;
  }
  function _read32_be($receiver, o) {
    return readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24;
  }
  function _read64_be($receiver, o) {
    var o_0 = o + 4 | 0;
    var o_1 = o + 0 | 0;
    return toUnsigned_0(readU8($receiver, o_0 + 3 | 0) << 0 | readU8($receiver, o_0 + 2 | 0) << 8 | readU8($receiver, o_0 + 1 | 0) << 16 | readU8($receiver, o_0 + 0 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 3 | 0) << 0 | readU8($receiver, o_1 + 2 | 0) << 8 | readU8($receiver, o_1 + 1 | 0) << 16 | readU8($receiver, o_1 + 0 | 0) << 24).shiftLeft(32));
  }
  function readU8($receiver, o) {
    return $receiver[o] & 255;
  }
  function readU16_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8;
  }
  function readU24_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16;
  }
  function readU32_le($receiver, o) {
    return toUnsigned_0(readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16 | readU8($receiver, o + 3 | 0) << 24);
  }
  function readU16_be($receiver, o) {
    return readU8($receiver, o + 1 | 0) << 0 | readU8($receiver, o + 0 | 0) << 8;
  }
  function readU24_be($receiver, o) {
    return readU8($receiver, o + 2 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 0 | 0) << 16;
  }
  function readU32_be($receiver, o) {
    return toUnsigned_0(readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24);
  }
  function readS8($receiver, o) {
    return $receiver[o];
  }
  function readS16_le($receiver, o) {
    return signExtend(readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8, 16);
  }
  function readS24_le($receiver, o) {
    return signExtend(readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16, 24);
  }
  function readS32_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16 | readU8($receiver, o + 3 | 0) << 24;
  }
  function readS64_le($receiver, o) {
    var o_0 = o + 0 | 0;
    var o_1 = o + 4 | 0;
    return toUnsigned_0(readU8($receiver, o_0 + 0 | 0) << 0 | readU8($receiver, o_0 + 1 | 0) << 8 | readU8($receiver, o_0 + 2 | 0) << 16 | readU8($receiver, o_0 + 3 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 0 | 0) << 0 | readU8($receiver, o_1 + 1 | 0) << 8 | readU8($receiver, o_1 + 2 | 0) << 16 | readU8($receiver, o_1 + 3 | 0) << 24).shiftLeft(32));
  }
  function readF32_le($receiver, o) {
    var bits = readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16 | readU8($receiver, o + 3 | 0) << 24;
    return Kotlin.floatFromBits(bits);
  }
  function readF64_le($receiver, o) {
    var o_0 = o + 0 | 0;
    var o_1 = o + 4 | 0;
    var bits = toUnsigned_0(readU8($receiver, o_0 + 0 | 0) << 0 | readU8($receiver, o_0 + 1 | 0) << 8 | readU8($receiver, o_0 + 2 | 0) << 16 | readU8($receiver, o_0 + 3 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 0 | 0) << 0 | readU8($receiver, o_1 + 1 | 0) << 8 | readU8($receiver, o_1 + 2 | 0) << 16 | readU8($receiver, o_1 + 3 | 0) << 24).shiftLeft(32));
    return Kotlin.doubleFromBits(bits);
  }
  function readS16_be($receiver, o) {
    return signExtend(readU8($receiver, o + 1 | 0) << 0 | readU8($receiver, o + 0 | 0) << 8, 16);
  }
  function readS24_be($receiver, o) {
    return signExtend(readU8($receiver, o + 2 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 0 | 0) << 16, 24);
  }
  function readS32_be($receiver, o) {
    return readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24;
  }
  function readS64_be($receiver, o) {
    var o_0 = o + 4 | 0;
    var o_1 = o + 0 | 0;
    return toUnsigned_0(readU8($receiver, o_0 + 3 | 0) << 0 | readU8($receiver, o_0 + 2 | 0) << 8 | readU8($receiver, o_0 + 1 | 0) << 16 | readU8($receiver, o_0 + 0 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 3 | 0) << 0 | readU8($receiver, o_1 + 2 | 0) << 8 | readU8($receiver, o_1 + 1 | 0) << 16 | readU8($receiver, o_1 + 0 | 0) << 24).shiftLeft(32));
  }
  function readF32_be($receiver, o) {
    var bits = readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24;
    return Kotlin.floatFromBits(bits);
  }
  function readF64_be($receiver, o) {
    var o_0 = o + 4 | 0;
    var o_1 = o + 0 | 0;
    var bits = toUnsigned_0(readU8($receiver, o_0 + 3 | 0) << 0 | readU8($receiver, o_0 + 2 | 0) << 8 | readU8($receiver, o_0 + 1 | 0) << 16 | readU8($receiver, o_0 + 0 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 3 | 0) << 0 | readU8($receiver, o_1 + 2 | 0) << 8 | readU8($receiver, o_1 + 1 | 0) << 16 | readU8($receiver, o_1 + 0 | 0) << 24).shiftLeft(32));
    return Kotlin.doubleFromBits(bits);
  }
  function readS16_LEBE($receiver, o, little) {
    return little ? readS16_le($receiver, o) : readS16_be($receiver, o);
  }
  function readS32_LEBE($receiver, o, little) {
    return little ? readS32_le($receiver, o) : readS32_be($receiver, o);
  }
  function readS64_LEBE($receiver, o, little) {
    return little ? readS64_le($receiver, o) : readS64_be($receiver, o);
  }
  function readF32_LEBE($receiver, o, little) {
    return little ? readF32_le($receiver, o) : readF32_be($receiver, o);
  }
  function readF64_LEBE($receiver, o, little) {
    return little ? readF64_le($receiver, o) : readF64_be($receiver, o);
  }
  function readTypedArray($receiver, o, count, elementSize, gen, read) {
    var array = gen();
    var pos = o;
    for (var n = 0; n < count; n++) {
      read($receiver, array, n, pos);
      pos = pos + elementSize | 0;
    }
    return array;
  }
  function readByteArray($receiver, o, count) {
    var toIndex = o + count | 0;
    return $receiver.slice(o, toIndex);
  }
  function readShortArray_le$lambda(closure$count) {
    return function () {
      return new Int16Array(closure$count);
    };
  }
  function readShortArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = toShort(readS16_le($receiver, pos));
    return Unit;
  }
  function readShortArray_le($receiver, o, count) {
    var array = readShortArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readShortArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 2 | 0;
    }
    return array;
  }
  function readCharArray_le$lambda(closure$count) {
    return function () {
      return Kotlin.charArray(closure$count);
    };
  }
  function readCharArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = toChar(readS16_le($receiver, pos));
    return Unit;
  }
  function readCharArray_le($receiver, o, count) {
    var array = readCharArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readCharArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 2 | 0;
    }
    return array;
  }
  function readIntArray_le$lambda(closure$count) {
    return function () {
      return new Int32Array(closure$count);
    };
  }
  function readIntArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = readS32_le($receiver, pos);
    return Unit;
  }
  function readIntArray_le($receiver, o, count) {
    var array = readIntArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readIntArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 4 | 0;
    }
    return array;
  }
  function readLongArray_le$lambda(closure$count) {
    return function () {
      return Kotlin.longArray(closure$count);
    };
  }
  function readLongArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = readS64_le($receiver, pos);
    return Unit;
  }
  function readLongArray_le($receiver, o, count) {
    var array = readLongArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readLongArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 8 | 0;
    }
    return array;
  }
  function readFloatArray_le$lambda(closure$count) {
    return function () {
      return new Float32Array(closure$count);
    };
  }
  function readFloatArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = readF32_le($receiver, pos);
    return Unit;
  }
  function readFloatArray_le($receiver, o, count) {
    var array = readFloatArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readFloatArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 4 | 0;
    }
    return array;
  }
  function readDoubleArray_le$lambda(closure$count) {
    return function () {
      return new Float64Array(closure$count);
    };
  }
  function readDoubleArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = readF64_le($receiver, pos);
    return Unit;
  }
  function readDoubleArray_le($receiver, o, count) {
    var array = readDoubleArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readDoubleArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 8 | 0;
    }
    return array;
  }
  function readShortArray_be$lambda(closure$count) {
    return function () {
      return new Int16Array(closure$count);
    };
  }
  function readShortArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = toShort(readS16_be($receiver, pos));
    return Unit;
  }
  function readShortArray_be($receiver, o, count) {
    var array = readShortArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readShortArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 2 | 0;
    }
    return array;
  }
  function readCharArray_be$lambda(closure$count) {
    return function () {
      return Kotlin.charArray(closure$count);
    };
  }
  function readCharArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = toChar(readS16_be($receiver, pos));
    return Unit;
  }
  function readCharArray_be($receiver, o, count) {
    var array = readCharArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readCharArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 2 | 0;
    }
    return array;
  }
  function readIntArray_be$lambda(closure$count) {
    return function () {
      return new Int32Array(closure$count);
    };
  }
  function readIntArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = readS32_be($receiver, pos);
    return Unit;
  }
  function readIntArray_be($receiver, o, count) {
    var array = readIntArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readIntArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 4 | 0;
    }
    return array;
  }
  function readLongArray_be$lambda(closure$count) {
    return function () {
      return Kotlin.longArray(closure$count);
    };
  }
  function readLongArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = readS64_be($receiver, pos);
    return Unit;
  }
  function readLongArray_be($receiver, o, count) {
    var array = readLongArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readLongArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 8 | 0;
    }
    return array;
  }
  function readFloatArray_be$lambda(closure$count) {
    return function () {
      return new Float32Array(closure$count);
    };
  }
  function readFloatArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = readF32_be($receiver, pos);
    return Unit;
  }
  function readFloatArray_be($receiver, o, count) {
    var array = readFloatArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readFloatArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 4 | 0;
    }
    return array;
  }
  function readDoubleArray_be$lambda(closure$count) {
    return function () {
      return new Float64Array(closure$count);
    };
  }
  function readDoubleArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = readF64_be($receiver, pos);
    return Unit;
  }
  function readDoubleArray_be($receiver, o, count) {
    var array = readDoubleArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readDoubleArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 8 | 0;
    }
    return array;
  }
  function signExtend($receiver, bits) {
    return $receiver << 32 - bits >> 32 - bits;
  }
  function signExtend_0($receiver, bits) {
    return $receiver.shiftLeft(64 - bits | 0).shiftRight(64 - bits | 0);
  }
  function toUnsigned($receiver) {
    return $receiver & 255;
  }
  function toUnsigned_0($receiver) {
    return Kotlin.Long.fromInt($receiver).and(new Kotlin.Long(-1, 0));
  }
  function UByteArray(data) {
    this.data = data;
    this.size = this.data.length;
  }
  UByteArray.prototype.get_za3lpa$ = defineInlineFunction('kmem-js.com.soywiz.kmem.UByteArray.get_za3lpa$', function (n) {
    return this.data[n] & 255;
  });
  UByteArray.prototype.set_vux9f0$ = defineInlineFunction('kmem-js.com.soywiz.kmem.UByteArray.set_vux9f0$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function (n, v) {
      this.data[n] = toByte(v);
    };
  }));
  UByteArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UByteArray',
    interfaces: []
  };
  function UByteArray_init(size, $this) {
    $this = $this || Object.create(UByteArray.prototype);
    UByteArray.call($this, new Int8Array(size));
    return $this;
  }
  function write8($receiver, o, v) {
    $receiver[o] = toByte(v);
  }
  function write8_0($receiver, o, v) {
    $receiver[o] = toByte(v.toInt());
  }
  function write16_LEBE($receiver, o, v, little) {
    little ? write16_le($receiver, o, v) : write16_be($receiver, o, v);
  }
  function write32_LEBE($receiver, o, v, little) {
    little ? write32_le($receiver, o, v) : write32_be($receiver, o, v);
  }
  function write64_LEBE($receiver, o, v, little) {
    little ? write64_le($receiver, o, v) : write64_be($receiver, o, v);
  }
  function writeF32_LEBE($receiver, o, v, little) {
    little ? writeF32_le($receiver, o, v) : writeF32_be($receiver, o, v);
  }
  function writeF64_LEBE($receiver, o, v, little) {
    little ? writeF64_le($receiver, o, v) : writeF64_be($receiver, o, v);
  }
  function write16_le($receiver, o, v) {
    $receiver[o + 0 | 0] = toByte(extract8(v, 0));
    $receiver[o + 1 | 0] = toByte(extract8(v, 8));
  }
  function write24_le($receiver, o, v) {
    $receiver[o + 0 | 0] = toByte(extract8(v, 0));
    $receiver[o + 1 | 0] = toByte(extract8(v, 8));
    $receiver[o + 2 | 0] = toByte(extract8(v, 16));
  }
  function write32_le($receiver, o, v) {
    $receiver[o + 0 | 0] = toByte(extract8(v, 0));
    $receiver[o + 1 | 0] = toByte(extract8(v, 8));
    $receiver[o + 2 | 0] = toByte(extract8(v, 16));
    $receiver[o + 3 | 0] = toByte(extract8(v, 24));
  }
  function write32_le_0($receiver, o, v) {
    write32_le($receiver, o, v.toInt());
  }
  function write64_le($receiver, o, v) {
    write32_le($receiver, o + 0 | 0, v.shiftRightUnsigned(0).toInt());
    write32_le($receiver, o + 4 | 0, v.shiftRightUnsigned(32).toInt());
  }
  function writeF32_le($receiver, o, v) {
    write32_le($receiver, o + 0 | 0, toRawBits(v));
  }
  function writeF64_le($receiver, o, v) {
    write64_le($receiver, o + 0 | 0, toRawBits_0(v));
  }
  function write16_be($receiver, o, v) {
    $receiver[o + 1 | 0] = toByte(extract8(v, 0));
    $receiver[o + 0 | 0] = toByte(extract8(v, 8));
  }
  function write24_be($receiver, o, v) {
    $receiver[o + 2 | 0] = toByte(extract8(v, 0));
    $receiver[o + 1 | 0] = toByte(extract8(v, 8));
    $receiver[o + 0 | 0] = toByte(extract8(v, 16));
  }
  function write32_be($receiver, o, v) {
    $receiver[o + 3 | 0] = toByte(extract8(v, 0));
    $receiver[o + 2 | 0] = toByte(extract8(v, 8));
    $receiver[o + 1 | 0] = toByte(extract8(v, 16));
    $receiver[o + 0 | 0] = toByte(extract8(v, 24));
  }
  function write32_be_0($receiver, o, v) {
    write32_be($receiver, o, v.toInt());
  }
  function write64_be($receiver, o, v) {
    write32_le($receiver, o + 0 | 0, v.shiftRightUnsigned(32).toInt());
    write32_le($receiver, o + 4 | 0, v.shiftRightUnsigned(0).toInt());
  }
  function writeF32_be($receiver, o, v) {
    write32_be($receiver, o + 0 | 0, toRawBits(v));
  }
  function writeF64_be($receiver, o, v) {
    write64_be($receiver, o + 0 | 0, toRawBits_0(v));
  }
  function writeBytes($receiver, o, bytes) {
    arraycopy_17(bytes, 0, $receiver, o, bytes.length);
  }
  function writeBytes_0($receiver, o, bytes) {
    arraycopy_17(bytes.data, 0, $receiver, o, bytes.size);
  }
  function writeTypedArray(o, elementSize, indices, write) {
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write(p, n);
      p = p + elementSize | 0;
    }
  }
  function writeArray_le($receiver, o, array) {
    var indices = get_indices_0(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write16_le($receiver, p, array[n] | 0);
      p = p + 2 | 0;
    }
  }
  function writeArray_le_0($receiver, o, array) {
    var indices = get_indices_1(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write16_le($receiver, p, array[n]);
      p = p + 2 | 0;
    }
  }
  function writeArray_le_1($receiver, o, array) {
    var indices = get_indices_2(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write32_le($receiver, p, array[n]);
      p = p + 4 | 0;
    }
  }
  function writeArray_le_2($receiver, o, array) {
    var indices = get_indices_3(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write64_le($receiver, p, array[n]);
      p = p + 8 | 0;
    }
  }
  function writeArray_le_3($receiver, o, array) {
    var indices = get_indices_4(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      writeF32_le($receiver, p, array[n]);
      p = p + 4 | 0;
    }
  }
  function writeArray_le_4($receiver, o, array) {
    var indices = get_indices_5(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      writeF64_le($receiver, p, array[n]);
      p = p + 8 | 0;
    }
  }
  function writeArray_be($receiver, o, array) {
    var indices = get_indices_0(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write16_be($receiver, p, array[n] | 0);
      p = p + 2 | 0;
    }
  }
  function writeArray_be_0($receiver, o, array) {
    var indices = get_indices_1(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write16_be($receiver, p, array[n]);
      p = p + 2 | 0;
    }
  }
  function writeArray_be_1($receiver, o, array) {
    var indices = get_indices_2(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write32_be($receiver, p, array[n]);
      p = p + 4 | 0;
    }
  }
  function writeArray_be_2($receiver, o, array) {
    var indices = get_indices_3(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write64_be($receiver, p, array[n]);
      p = p + 8 | 0;
    }
  }
  function writeArray_be_3($receiver, o, array) {
    var indices = get_indices_4(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      writeF32_be($receiver, p, array[n]);
      p = p + 4 | 0;
    }
  }
  function writeArray_be_4($receiver, o, array) {
    var indices = get_indices_5(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      writeF64_be($receiver, p, array[n]);
      p = p + 8 | 0;
    }
  }
  function extract8($receiver, offset) {
    return $receiver >>> offset & 255;
  }
  var MemBufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.MemBufferAlloc_za3lpa$', wrapFunction(function () {
    var ArrayBuffer_init = ArrayBuffer;
    return function (size) {
      return new ArrayBuffer_init(size + 15 & ~15);
    };
  }));
  var MemBufferWrap = defineInlineFunction('kmem-js.com.soywiz.kmem.MemBufferWrap_fqrh44$', function (array) {
    return array.buffer;
  });
  var get_size = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_qfdq9h$', function ($receiver) {
    return $receiver.byteLength;
  });
  var _sliceInt8Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceInt8Buffer_3gn6rj$', wrapFunction(function () {
    var Int8Array_init = Int8Array;
    return function ($receiver, offset, size) {
      return new Int8Array_init($receiver, offset * 1 | 0, size);
    };
  }));
  var _sliceInt16Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceInt16Buffer_3gn6rj$', wrapFunction(function () {
    var Int16Array_init = Int16Array;
    return function ($receiver, offset, size) {
      return new Int16Array_init($receiver, offset * 2 | 0, size);
    };
  }));
  var _sliceInt32Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceInt32Buffer_3gn6rj$', wrapFunction(function () {
    var Int32Array_init = Int32Array;
    return function ($receiver, offset, size) {
      return new Int32Array_init($receiver, offset * 4 | 0, size);
    };
  }));
  var _sliceFloat32Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceFloat32Buffer_3gn6rj$', wrapFunction(function () {
    var Float32Array_init = Float32Array;
    return function ($receiver, offset, size) {
      return new Float32Array_init($receiver, offset * 4 | 0, size);
    };
  }));
  var _sliceFloat64Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceFloat64Buffer_3gn6rj$', wrapFunction(function () {
    var Float64Array_init = Float64Array;
    return function ($receiver, offset, size) {
      return new Float64Array_init($receiver, offset * 8 | 0, size);
    };
  }));
  function getData($receiver) {
    return new DataView($receiver);
  }
  function getByte($receiver, index) {
    return $receiver.getInt8(index);
  }
  function setByte($receiver, index, value) {
    $receiver.setInt8(index, value);
  }
  function getShort($receiver, index) {
    return $receiver.getInt16(index, true);
  }
  function setShort($receiver, index, value) {
    $receiver.setInt16(index, value, true);
  }
  function getInt($receiver, index) {
    return $receiver.getInt32(index, true);
  }
  function setInt($receiver, index, value) {
    $receiver.setInt32(index, value, true);
  }
  function getFloat($receiver, index) {
    return $receiver.getFloat32(index, true);
  }
  function setFloat($receiver, index, value) {
    $receiver.setFloat32(index, value, true);
  }
  function getDouble($receiver, index) {
    return $receiver.getFloat64(index, true);
  }
  function setDouble($receiver, index, value) {
    $receiver.setFloat64(index, value, true);
  }
  var get_mem = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_1c7w7g$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_1c7w7g$', function ($receiver) {
    return $receiver.byteOffset / 1 | 0;
  });
  var get_size_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_1c7w7g$', function ($receiver) {
    return $receiver.length;
  });
  var get_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_xri1zq$', function ($receiver, index) {
    return $receiver[index];
  });
  var set = defineInlineFunction('kmem-js.com.soywiz.kmem.set_wq71gh$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var get_mem_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_1qrwyz$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_1qrwyz$', function ($receiver) {
    return $receiver.byteOffset / 2 | 0;
  });
  var get_size_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_1qrwyz$', function ($receiver) {
    return $receiver.length;
  });
  var get_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_cwlqq1$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.set_3szanw$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var get_mem_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_2t43qp$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_2t43qp$', function ($receiver) {
    return $receiver.byteOffset / 4 | 0;
  });
  var get_size_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_2t43qp$', function ($receiver) {
    return $receiver.length;
  });
  var get_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_6ngfjl$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.set_yyuw59$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var get_mem_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_948t6k$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_948t6k$', function ($receiver) {
    return $receiver.byteOffset / 4 | 0;
  });
  var get_size_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_948t6k$', function ($receiver) {
    return $receiver.length;
  });
  var get_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_vvlk2q$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.set_rpd3xf$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var get_mem_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_h4bb51$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_h4bb51$', function ($receiver) {
    return $receiver.byteOffset / 8 | 0;
  });
  var get_size_4 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_h4bb51$', function ($receiver) {
    return $receiver.length;
  });
  var get_4 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_yg2kxp$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.set_ogqgs1$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var asInt8Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt8Array_964n91$', function ($receiver) {
    return $receiver;
  });
  var asTyped = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_964n91$', function ($receiver) {
    return $receiver;
  });
  var asInt16Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt16Array_i2lc79$', function ($receiver) {
    return $receiver;
  });
  var asTyped_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_i2lc79$', function ($receiver) {
    return $receiver;
  });
  var asInt32Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt32Array_tmsbgo$', function ($receiver) {
    return $receiver;
  });
  var asTyped_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_tmsbgo$', function ($receiver) {
    return $receiver;
  });
  var asFloat32Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asFloat32Array_rjqryz$', function ($receiver) {
    return $receiver;
  });
  var asTyped_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_rjqryz$', function ($receiver) {
    return $receiver;
  });
  var asFloat64Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asFloat64Array_bvy38s$', function ($receiver) {
    return $receiver;
  });
  var asTyped_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_bvy38s$', function ($receiver) {
    return $receiver;
  });
  function arraycopy_14(src, srcPos, dst, dstPos, size) {
    if (src === dst && srcPos >= dstPos) {
      for (var n = 0; n < size; n++)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = size - 1 | 0; n_0 >= 0; n_0--)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  }
  function arraycopy_15(src, srcPos, dst, dstPos, size) {
    if (src === dst && srcPos >= dstPos) {
      for (var n = 0; n < size; n++)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = size - 1 | 0; n_0 >= 0; n_0--)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  }
  function arraycopy_16(src, srcPos, dst, dstPos, size) {
    if (src === dst && srcPos >= dstPos) {
      for (var n = 0; n < size; n++)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = size - 1 | 0; n_0 >= 0; n_0--)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  }
  function arraycopy_17(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_18(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_19(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_20(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_21(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_22(src, srcPos, dst, dstPos, size) {
    (new Int8Array(dst, dstPos)).set(new Int8Array(src, srcPos, size), 0);
  }
  function arraycopy_23(src, srcPos, dst, dstPos, size) {
    (new Int8Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_24(src, srcPos, dst, dstPos, size) {
    dst.set((new Int8Array_init(src, 0 * 1 | 0, src.byteLength / 1 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_25(src, srcPos, dst, dstPos, size) {
    (new Int16Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_26(src, srcPos, dst, dstPos, size) {
    dst.set((new Int16Array_init(src, 0 * 2 | 0, src.byteLength / 2 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_27(src, srcPos, dst, dstPos, size) {
    (new Int32Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_28(src, srcPos, dst, dstPos, size) {
    dst.set((new Int32Array_init(src, 0 * 4 | 0, src.byteLength / 4 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_29(src, srcPos, dst, dstPos, size) {
    (new Float32Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_30(src, srcPos, dst, dstPos, size) {
    dst.set((new Float32Array_init(src, 0 * 4 | 0, src.byteLength / 4 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_31(src, srcPos, dst, dstPos, size) {
    (new Float64Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_32(src, srcPos, dst, dstPos, size) {
    dst.set((new Float64Array_init(src, 0 * 8 | 0, src.byteLength / 8 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function _fill(array, value, start, end) {
    for (var n = start; n < end; n++)
      array[n] = value;
  }
  function _fill_0(array, value, start, end) {
    for (var n = start; n < end; n++)
      array[n] = value;
  }
  function _fill_1(array, value, start, end) {
    for (var n = start; n < end; n++)
      array[n] = value;
  }
  var _fill_2 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_diwe25$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var _fill_3 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_38ja29$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var _fill_4 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_7lcbvb$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var _fill_5 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_9c50fl$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var _fill_6 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_7e20el$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kmem = package$soywiz.kmem || (package$soywiz.kmem = {});
  package$kmem.ByteArrayBuffer_init_za3lpa$ = ByteArrayBuffer_init;
  package$kmem.ByteArrayBuffer = ByteArrayBuffer;
  Object.defineProperty(ByteArraySlice, 'Companion', {
    get: ByteArraySlice$Companion_getInstance
  });
  package$kmem.ByteArraySlice = ByteArraySlice;
  package$kmem.toByteArraySlice_964n91$ = toByteArraySlice;
  package$kmem.contains_ndt7zj$ = contains;
  package$kmem.indexOf_ndt7zj$ = indexOf;
  $$importsForInline$$['kmem-js'] = _;
  Object.defineProperty(FastMemory, 'Companion', {
    get: FastMemory$Companion_getInstance
  });
  package$kmem.FastMemory = FastMemory;
  Object.defineProperty(package$kmem, 'Kmem', {
    get: Kmem_getInstance
  });
  package$kmem.get_size_qfdq9h$ = get_size;
  package$kmem._sliceInt8Buffer_3gn6rj$ = _sliceInt8Buffer;
  package$kmem.sliceInt8Buffer_3gn6rj$ = sliceInt8Buffer;
  package$kmem._sliceInt16Buffer_3gn6rj$ = _sliceInt16Buffer;
  package$kmem.sliceInt16Buffer_3gn6rj$ = sliceInt16Buffer;
  package$kmem._sliceInt32Buffer_3gn6rj$ = _sliceInt32Buffer;
  package$kmem.sliceInt32Buffer_3gn6rj$ = sliceInt32Buffer;
  package$kmem._sliceFloat32Buffer_3gn6rj$ = _sliceFloat32Buffer;
  package$kmem.sliceFloat32Buffer_3gn6rj$ = sliceFloat32Buffer;
  package$kmem._sliceFloat64Buffer_3gn6rj$ = _sliceFloat64Buffer;
  package$kmem.sliceFloat64Buffer_3gn6rj$ = sliceFloat64Buffer;
  package$kmem.asInt8Buffer_qfdq9h$ = asInt8Buffer;
  package$kmem.asInt16Buffer_qfdq9h$ = asInt16Buffer;
  package$kmem.asInt32Buffer_qfdq9h$ = asInt32Buffer;
  package$kmem.asFloat32Buffer_qfdq9h$ = asFloat32Buffer;
  package$kmem.asFloat64Buffer_qfdq9h$ = asFloat64Buffer;
  package$kmem.MemBufferAlloc_za3lpa$ = MemBufferAlloc;
  package$kmem.Int8BufferAlloc_za3lpa$ = Int8BufferAlloc;
  package$kmem.subarray_o5cym0$ = subarray;
  package$kmem.Int16BufferAlloc_za3lpa$ = Int16BufferAlloc;
  package$kmem.subarray_4t3t55$ = subarray_0;
  package$kmem.Int32BufferAlloc_za3lpa$ = Int32BufferAlloc;
  package$kmem.subarray_yyuw59$ = subarray_1;
  package$kmem.Float32BufferAlloc_za3lpa$ = Float32BufferAlloc;
  package$kmem.subarray_ae5d4g$ = subarray_2;
  package$kmem.Float64BufferAlloc_za3lpa$ = Float64BufferAlloc;
  package$kmem.subarray_yobqq7$ = subarray_3;
  package$kmem.arraycopy_uwef9a$ = arraycopy;
  package$kmem.arraycopy_8tjh9j$ = arraycopy_0;
  package$kmem.arraycopy_qkjr37$ = arraycopy_1;
  package$kmem.arraycopy_158rwy$ = arraycopy_2;
  package$kmem.arraycopy_4z3iam$ = arraycopy_3;
  package$kmem.arraycopy_ygklgy$ = arraycopy_4;
  package$kmem.arraycopy_180aji$ = arraycopy_5;
  package$kmem.arraycopy_ou7pqt$ = arraycopy_6;
  package$kmem.arraycopy_qjgkt5$ = arraycopy_7;
  package$kmem.arraycopy_kf4lg$ = arraycopy_8;
  package$kmem.arraycopy_3broed$ = arraycopy_9;
  package$kmem.arraycopy_clb6nt$ = arraycopy_10;
  package$kmem.arraycopy_y3efd2$ = arraycopy_11;
  package$kmem.arraycopy_9x1f59$ = arraycopy_12;
  package$kmem.arraycopy_pxmij7$ = arraycopy_13;
  package$kmem.fill_jfbbbd$ = fill;
  package$kmem.fill_py0txo$ = fill_0;
  package$kmem.fill_wp4zxy$ = fill_1;
  package$kmem._fill_diwe25$ = _fill_2;
  package$kmem.fill_6mk3ue$ = fill_2;
  package$kmem._fill_38ja29$ = _fill_3;
  package$kmem.fill_htcctw$ = fill_3;
  package$kmem._fill_7lcbvb$ = _fill_4;
  package$kmem.fill_tpuxuu$ = fill_4;
  package$kmem._fill_9c50fl$ = _fill_5;
  package$kmem.fill_nwy378$ = fill_5;
  package$kmem._fill_7e20el$ = _fill_6;
  package$kmem.fill_x4f2cq$ = fill_6;
  Object.defineProperty(package$kmem, 'KMEM_VERSION', {
    get: function () {
      return KMEM_VERSION;
    }
  });
  package$kmem.Pointer = Pointer;
  package$kmem.readU8_mrm5p$ = readU8;
  package$kmem.readU16_le_mrm5p$ = readU16_le;
  package$kmem.readU24_le_mrm5p$ = readU24_le;
  package$kmem.readU32_le_mrm5p$ = readU32_le;
  package$kmem.readU16_be_mrm5p$ = readU16_be;
  package$kmem.readU24_be_mrm5p$ = readU24_be;
  package$kmem.readU32_be_mrm5p$ = readU32_be;
  package$kmem.readS8_mrm5p$ = readS8;
  package$kmem.readS16_le_mrm5p$ = readS16_le;
  package$kmem.readS24_le_mrm5p$ = readS24_le;
  package$kmem.readS32_le_mrm5p$ = readS32_le;
  package$kmem.readS64_le_mrm5p$ = readS64_le;
  package$kmem.readF32_le_mrm5p$ = readF32_le;
  package$kmem.readF64_le_mrm5p$ = readF64_le;
  package$kmem.readS16_be_mrm5p$ = readS16_be;
  package$kmem.readS24_be_mrm5p$ = readS24_be;
  package$kmem.readS32_be_mrm5p$ = readS32_be;
  package$kmem.readS64_be_mrm5p$ = readS64_be;
  package$kmem.readF32_be_mrm5p$ = readF32_be;
  package$kmem.readF64_be_mrm5p$ = readF64_be;
  package$kmem.readS16_LEBE_v6bsu2$ = readS16_LEBE;
  package$kmem.readS32_LEBE_v6bsu2$ = readS32_LEBE;
  package$kmem.readS64_LEBE_v6bsu2$ = readS64_LEBE;
  package$kmem.readF32_LEBE_v6bsu2$ = readF32_LEBE;
  package$kmem.readF64_LEBE_v6bsu2$ = readF64_LEBE;
  package$kmem.readByteArray_ietg8x$ = readByteArray;
  package$kmem.readShortArray_le_ietg8x$ = readShortArray_le;
  package$kmem.readCharArray_le_ietg8x$ = readCharArray_le;
  package$kmem.readIntArray_le_ietg8x$ = readIntArray_le;
  package$kmem.readLongArray_le_ietg8x$ = readLongArray_le;
  package$kmem.readFloatArray_le_ietg8x$ = readFloatArray_le;
  package$kmem.readDoubleArray_le_ietg8x$ = readDoubleArray_le;
  package$kmem.readShortArray_be_ietg8x$ = readShortArray_be;
  package$kmem.readCharArray_be_ietg8x$ = readCharArray_be;
  package$kmem.readIntArray_be_ietg8x$ = readIntArray_be;
  package$kmem.readLongArray_be_ietg8x$ = readLongArray_be;
  package$kmem.readFloatArray_be_ietg8x$ = readFloatArray_be;
  package$kmem.readDoubleArray_be_ietg8x$ = readDoubleArray_be;
  package$kmem.UByteArray_init_za3lpa$ = UByteArray_init;
  package$kmem.UByteArray = UByteArray;
  package$kmem.write8_ietg8x$ = write8;
  package$kmem.write8_2iihii$ = write8_0;
  package$kmem.write16_LEBE_vahp5y$ = write16_LEBE;
  package$kmem.write32_LEBE_vahp5y$ = write32_LEBE;
  package$kmem.write64_LEBE_zb9jod$ = write64_LEBE;
  package$kmem.writeF32_LEBE_wimvbt$ = writeF32_LEBE;
  package$kmem.writeF64_LEBE_nq0ryw$ = writeF64_LEBE;
  package$kmem.write16_le_ietg8x$ = write16_le;
  package$kmem.write24_le_ietg8x$ = write24_le;
  package$kmem.write32_le_ietg8x$ = write32_le;
  package$kmem.write32_le_2iihii$ = write32_le_0;
  package$kmem.write64_le_2iihii$ = write64_le;
  package$kmem.writeF32_le_6tgd4e$ = writeF32_le;
  package$kmem.writeF64_le_2mkvlt$ = writeF64_le;
  package$kmem.write16_be_ietg8x$ = write16_be;
  package$kmem.write24_be_ietg8x$ = write24_be;
  package$kmem.write32_be_ietg8x$ = write32_be;
  package$kmem.write32_be_2iihii$ = write32_be_0;
  package$kmem.write64_be_2iihii$ = write64_be;
  package$kmem.writeF32_be_6tgd4e$ = writeF32_be;
  package$kmem.writeF64_be_2mkvlt$ = writeF64_be;
  package$kmem.writeBytes_cinhdp$ = writeBytes;
  package$kmem.writeBytes_ote1qv$ = writeBytes_0;
  package$kmem.writeArray_le_ns39l7$ = writeArray_le;
  package$kmem.writeArray_le_744o0l$ = writeArray_le_0;
  package$kmem.writeArray_le_ir5l5k$ = writeArray_le_1;
  package$kmem.writeArray_le_nitnbj$ = writeArray_le_2;
  package$kmem.writeArray_le_l7896z$ = writeArray_le_3;
  package$kmem.writeArray_le_t2mdne$ = writeArray_le_4;
  package$kmem.writeArray_be_ns39l7$ = writeArray_be;
  package$kmem.writeArray_be_744o0l$ = writeArray_be_0;
  package$kmem.writeArray_be_ir5l5k$ = writeArray_be_1;
  package$kmem.writeArray_be_nitnbj$ = writeArray_be_2;
  package$kmem.writeArray_be_l7896z$ = writeArray_be_3;
  package$kmem.writeArray_be_t2mdne$ = writeArray_be_4;
  package$kmem.MemBufferWrap_fqrh44$ = MemBufferWrap;
  package$kmem.getData_qfdq9h$ = getData;
  package$kmem.getByte_gt8xkd$ = getByte;
  package$kmem.setByte_pfef92$ = setByte;
  package$kmem.getShort_gt8xkd$ = getShort;
  package$kmem.setShort_76832m$ = setShort;
  package$kmem.getInt_gt8xkd$ = getInt;
  package$kmem.setInt_61xgu7$ = setInt;
  package$kmem.getFloat_gt8xkd$ = getFloat;
  package$kmem.setFloat_6z5awe$ = setFloat;
  package$kmem.getDouble_gt8xkd$ = getDouble;
  package$kmem.setDouble_29w7i7$ = setDouble;
  package$kmem.get_mem_1c7w7g$ = get_mem;
  package$kmem.get_offset_1c7w7g$ = get_offset;
  package$kmem.get_size_1c7w7g$ = get_size_0;
  package$kmem.get_xri1zq$ = get_0;
  package$kmem.set_wq71gh$ = set;
  package$kmem.get_mem_1qrwyz$ = get_mem_0;
  package$kmem.get_offset_1qrwyz$ = get_offset_0;
  package$kmem.get_size_1qrwyz$ = get_size_1;
  package$kmem.get_cwlqq1$ = get_1;
  package$kmem.set_3szanw$ = set_0;
  package$kmem.get_mem_2t43qp$ = get_mem_1;
  package$kmem.get_offset_2t43qp$ = get_offset_1;
  package$kmem.get_size_2t43qp$ = get_size_2;
  package$kmem.get_6ngfjl$ = get_2;
  package$kmem.set_yyuw59$ = set_1;
  package$kmem.get_mem_948t6k$ = get_mem_2;
  package$kmem.get_offset_948t6k$ = get_offset_2;
  package$kmem.get_size_948t6k$ = get_size_3;
  package$kmem.get_vvlk2q$ = get_3;
  package$kmem.set_rpd3xf$ = set_2;
  package$kmem.get_mem_h4bb51$ = get_mem_3;
  package$kmem.get_offset_h4bb51$ = get_offset_3;
  package$kmem.get_size_h4bb51$ = get_size_4;
  package$kmem.get_yg2kxp$ = get_4;
  package$kmem.set_ogqgs1$ = set_3;
  package$kmem.asInt8Array_964n91$ = asInt8Array;
  package$kmem.asTyped_964n91$ = asTyped;
  package$kmem.asInt16Array_i2lc79$ = asInt16Array;
  package$kmem.asTyped_i2lc79$ = asTyped_0;
  package$kmem.asInt32Array_tmsbgo$ = asInt32Array;
  package$kmem.asTyped_tmsbgo$ = asTyped_1;
  package$kmem.asFloat32Array_rjqryz$ = asFloat32Array;
  package$kmem.asTyped_rjqryz$ = asTyped_2;
  package$kmem.asFloat64Array_bvy38s$ = asFloat64Array;
  package$kmem.asTyped_bvy38s$ = asTyped_3;
  package$kmem.arraycopy_vybhjg$ = arraycopy_14;
  package$kmem.arraycopy_3poh7i$ = arraycopy_15;
  package$kmem.arraycopy_m70dtq$ = arraycopy_16;
  package$kmem.arraycopy_nlwz52$ = arraycopy_17;
  package$kmem.arraycopy_ai5qaq$ = arraycopy_18;
  package$kmem.arraycopy_lvhpry$ = arraycopy_19;
  package$kmem.arraycopy_5ukzfm$ = arraycopy_20;
  package$kmem.arraycopy_dgpv4k$ = arraycopy_21;
  package$kmem.arraycopy_mwgkm6$ = arraycopy_22;
  package$kmem.arraycopy_jf0qaq$ = arraycopy_23;
  package$kmem.arraycopy_7bkom2$ = arraycopy_24;
  package$kmem.arraycopy_c6wrq4$ = arraycopy_25;
  package$kmem.arraycopy_mihd94$ = arraycopy_26;
  package$kmem.arraycopy_ciuv3l$ = arraycopy_27;
  package$kmem.arraycopy_x0s07p$ = arraycopy_28;
  package$kmem.arraycopy_mx3ol8$ = arraycopy_29;
  package$kmem.arraycopy_owenk8$ = arraycopy_30;
  package$kmem.arraycopy_buz8ph$ = arraycopy_31;
  package$kmem.arraycopy_km662r$ = arraycopy_32;
  package$kmem._fill_iv3oks$ = _fill;
  package$kmem._fill_9l0r9l$ = _fill_0;
  package$kmem._fill_cjoi1f$ = _fill_1;
  KMEM_VERSION = '0.1.0';
  Kotlin.defineModule('kmem-js', _);
  return _;
}));

//# sourceMappingURL=kmem-js.js.map
