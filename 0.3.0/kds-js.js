(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmem-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmem-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kds-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kds-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'kds-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'kds-js'.");
    }
    root['kds-js'] = factory(typeof this['kds-js'] === 'undefined' ? {} : this['kds-js'], kotlin, this['kmem-js']);
  }
}(this, function (_, Kotlin, $module$kmem_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var equals = Kotlin.equals;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Unit = Kotlin.kotlin.Unit;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var MutableIterable = Kotlin.kotlin.collections.MutableIterable;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var Pair = Kotlin.kotlin.Pair;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  function BitSet(size) {
    this.size = size;
    this.data = new Int32Array((this.size + 31 & 31) / 32 | 0);
  }
  BitSet.prototype.part_0 = function (index) {
    return index >>> 5;
  };
  BitSet.prototype.bit_0 = function (index) {
    return index & 31;
  };
  BitSet.prototype.get_za3lpa$ = function (index) {
    return (this.data[this.part_0(index)] >>> this.bit_0(index) & 1) !== 0;
  };
  BitSet.prototype.set_fzusl$ = function (index, value) {
    var i = this.part_0(index);
    var b = this.bit_0(index);
    if (value) {
      this.data[i] = this.data[i] | 1 << b;
    }
     else {
      this.data[i] = this.data[i] & ~(1 << b);
    }
  };
  BitSet.prototype.set_za3lpa$ = function (index) {
    this.set_fzusl$(index, true);
  };
  BitSet.prototype.unset_za3lpa$ = function (index) {
    this.set_fzusl$(index, false);
  };
  BitSet.prototype.clear = function () {
    var $receiver = this.data;
    var end;
    end = $receiver.length;
    $receiver.fill(0, 0, end);
  };
  BitSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitSet',
    interfaces: []
  };
  function CacheMap(maxSize, free) {
    if (maxSize === void 0)
      maxSize = 16;
    if (free === void 0)
      free = CacheMap_init$lambda;
    this.maxSize = maxSize;
    this.free = free;
    this.entries = LinkedHashMap_init();
  }
  Object.defineProperty(CacheMap.prototype, 'size', {
    get: function () {
      return this.entries.size;
    }
  });
  CacheMap.prototype.has_11rb$ = function (key) {
    return this.entries.containsKey_11rb$(key);
  };
  CacheMap.prototype.remove_11rb$ = function (key) {
    var value = this.entries.remove_11rb$(key);
    if (value != null)
      this.free(key, value);
  };
  CacheMap.prototype.get_11rb$ = function (key) {
    return this.entries.get_11rb$(key);
  };
  CacheMap.prototype.set_xwzc9p$ = function (key, value) {
    if (this.size >= this.maxSize && !this.entries.containsKey_11rb$(key))
      this.remove_11rb$(first(this.entries.keys));
    var oldValue = this.entries.get_11rb$(key);
    if (!equals(oldValue, value)) {
      this.remove_11rb$(key);
      this.entries.put_xwzc9p$(key, value);
    }
  };
  CacheMap.prototype.getOrPut_mhvqli$ = defineInlineFunction('kds-js.com.soywiz.kds.CacheMap.getOrPut_mhvqli$', wrapFunction(function () {
    var ensureNotNull = Kotlin.ensureNotNull;
    return function (key, callback) {
      if (!this.has_11rb$(key))
        this.set_xwzc9p$(key, callback(key));
      return ensureNotNull(this.get_11rb$(key));
    };
  }));
  CacheMap.prototype.clear = function () {
    var tmp$;
    var keys = toList(this.entries.keys);
    tmp$ = keys.iterator();
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      this.remove_11rb$(key);
    }
  };
  function CacheMap_init$lambda(k, v) {
    return Unit;
  }
  CacheMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheMap',
    interfaces: []
  };
  function Computed(prop, default_0) {
    this.prop = prop;
    this.default = default_0;
  }
  function Computed$WithParent() {
  }
  Computed$WithParent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WithParent',
    interfaces: []
  };
  Computed.prototype.getValue_608w9m$ = function (thisRef, p) {
    var current = thisRef;
    while (current != null) {
      var result = this.prop.get(current);
      if (result != null)
        return result;
      current = current.parent;
    }
    return this.default();
  };
  Computed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Computed',
    interfaces: []
  };
  function Extra() {
  }
  function Extra$Mixin(extra) {
    if (extra === void 0)
      extra = null;
    this.extra_xlwwn3$_0 = extra;
  }
  Object.defineProperty(Extra$Mixin.prototype, 'extra', {
    get: function () {
      return this.extra_xlwwn3$_0;
    },
    set: function (extra) {
      this.extra_xlwwn3$_0 = extra;
    }
  });
  Extra$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [Extra]
  };
  function Extra$Property(name, defaultGen) {
    if (name === void 0)
      name = null;
    this.name = name;
    this.defaultGen = defaultGen;
  }
  Extra$Property.prototype.getValue_jvq2vc$ = defineInlineFunction('kds-js.com.soywiz.kds.Extra.Property.getValue_jvq2vc$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var lmapOf = _.com.soywiz.kds.lmapOf_qfcya0$;
    return function (thisRef, property) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = this.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if (thisRef.extra == null)
          thisRef.extra = lmapOf([]);
        tmp$_7 = thisRef.extra;
        tmp$_4 = (tmp$_3 = this.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        return r;
      }
      return res;
    };
  }));
  Extra$Property.prototype.setValue_tgmkxv$ = defineInlineFunction('kds-js.com.soywiz.kds.Extra.Property.setValue_tgmkxv$', wrapFunction(function () {
    var lmapOf = _.com.soywiz.kds.lmapOf_qfcya0$;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (thisRef, property, value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (thisRef.extra == null)
        thisRef.extra = lmapOf([]);
      tmp$_3 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      tmp$_2 = (tmp$_1 = value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
      if (tmp$_3 != null) {
        tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
      }
    };
  }));
  Extra$Property.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Property',
    interfaces: []
  };
  function Extra$PropertyThis(name, defaultGen) {
    if (name === void 0)
      name = null;
    this.name = name;
    this.defaultGen = defaultGen;
  }
  Extra$PropertyThis.prototype.getValue_e5fciw$ = defineInlineFunction('kds-js.com.soywiz.kds.Extra.PropertyThis.getValue_e5fciw$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var lmapOf = _.com.soywiz.kds.lmapOf_qfcya0$;
    return function (thisRef, property) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = this.defaultGen(thisRef);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if (thisRef.extra == null)
          thisRef.extra = lmapOf([]);
        tmp$_7 = thisRef.extra;
        tmp$_4 = (tmp$_3 = this.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        return r;
      }
      return res;
    };
  }));
  Extra$PropertyThis.prototype.setValue_ajenn0$ = defineInlineFunction('kds-js.com.soywiz.kds.Extra.PropertyThis.setValue_ajenn0$', wrapFunction(function () {
    var lmapOf = _.com.soywiz.kds.lmapOf_qfcya0$;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (thisRef, property, value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (thisRef.extra == null)
        thisRef.extra = lmapOf([]);
      tmp$_3 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      tmp$_2 = (tmp$_1 = value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
      if (tmp$_3 != null) {
        tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
      }
    };
  }));
  Extra$PropertyThis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertyThis',
    interfaces: []
  };
  Extra.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Extra',
    interfaces: []
  };
  function extraProperty(name, default_0) {
    this.name = name;
    this.default = default_0;
  }
  extraProperty.prototype.getValue_jvq2vc$ = defineInlineFunction('kds-js.com.soywiz.kds.extraProperty.getValue_jvq2vc$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (thisRef, property) {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = thisRef.extra) != null ? tmp$.get_11rb$(this.name) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE()) != null ? tmp$_1 : this.default;
    };
  }));
  extraProperty.prototype.setValue_tgmkxv$ = defineInlineFunction('kds-js.com.soywiz.kds.extraProperty.setValue_tgmkxv$', wrapFunction(function () {
    var lmapOf = _.com.soywiz.kds.lmapOf_qfcya0$;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (thisRef, property, value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (thisRef.extra == null)
        thisRef.extra = lmapOf([]);
      tmp$_2 = thisRef.extra;
      tmp$ = this.name;
      tmp$_1 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
      if (tmp$_2 != null) {
        tmp$_2.put_xwzc9p$(tmp$, tmp$_1);
      }
    };
  }));
  extraProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'extraProperty',
    interfaces: []
  };
  function getOrPut($receiver, key, callback) {
    var res = $receiver.get_za3lpa$(key);
    if (res == null)
      $receiver.set_wxm5ur$(key, callback());
    return ensureNotNull($receiver.get_za3lpa$(key));
  }
  function Kds() {
    Kds_instance = this;
    this.VERSION = KDS_VERSION;
  }
  Kds.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Kds',
    interfaces: []
  };
  var Kds_instance = null;
  function Kds_getInstance() {
    if (Kds_instance === null) {
      new Kds();
    }
    return Kds_instance;
  }
  var KDS_VERSION;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function LinkedList(list) {
    if (list === void 0) {
      list = ArrayList_init();
    }
    this.list_0 = list;
  }
  Object.defineProperty(LinkedList.prototype, 'size', {
    get: function () {
      return this.list_0.size;
    }
  });
  LinkedList.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  LinkedList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  LinkedList.prototype.addAll_p1ys8y$ = function (items) {
    return addAll(this.list_0, items);
  };
  LinkedList.prototype.addFirst_11rb$ = function (item) {
    this.list_0.add_wxm5ur$(0, item);
  };
  LinkedList.prototype.addLast_11rb$ = function (item) {
    return this.list_0.add_11rb$(item);
  };
  LinkedList.prototype.removeFirst = function () {
    return this.list_0.removeAt_za3lpa$(0);
  };
  LinkedList.prototype.removeLast = function () {
    return this.list_0.removeAt_za3lpa$(this.list_0.size - 1 | 0);
  };
  Object.defineProperty(LinkedList.prototype, 'last', {
    get: function () {
      return last(this.list_0);
    }
  });
  LinkedList.prototype.add_11rb$ = function (element) {
    return this.list_0.add_11rb$(element);
  };
  LinkedList.prototype.addAll_brywnq$ = function (elements) {
    return this.list_0.addAll_brywnq$(elements);
  };
  LinkedList.prototype.clear = function () {
    return this.list_0.clear();
  };
  LinkedList.prototype.contains_11rb$ = function (element) {
    return this.list_0.contains_11rb$(element);
  };
  LinkedList.prototype.containsAll_brywnq$ = function (elements) {
    return this.list_0.containsAll_brywnq$(elements);
  };
  LinkedList.prototype.iterator = function () {
    return this.list_0.iterator();
  };
  LinkedList.prototype.remove_11rb$ = function (element) {
    return this.list_0.remove_11rb$(element);
  };
  LinkedList.prototype.removeAll_brywnq$ = function (elements) {
    return this.list_0.removeAll_brywnq$(elements);
  };
  LinkedList.prototype.retainAll_brywnq$ = function (elements) {
    return this.list_0.retainAll_brywnq$(elements);
  };
  LinkedList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedList',
    interfaces: [MutableCollection]
  };
  function LinkedList2() {
    this._size_0 = 0;
    this.head_0 = null;
    this.tail_0 = null;
  }
  function LinkedList2$iterator$ObjectLiteral(this$LinkedList2) {
    this.this$LinkedList2 = this$LinkedList2;
    this.current = null;
    this._next = this$LinkedList2.head_0;
  }
  LinkedList2$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this._next != null;
  };
  LinkedList2$iterator$ObjectLiteral.prototype.remove = function () {
    this.this$LinkedList2;
    this.this$LinkedList2;
    var this$LinkedList2 = this.this$LinkedList2;
    if (this.current != null)
      this$LinkedList2.remove_ecc9t0$(ensureNotNull(this.current));
  };
  LinkedList2$iterator$ObjectLiteral.prototype.next = function () {
    this.this$LinkedList2;
    var tmp$;
    var res = this._next;
    this._next = (tmp$ = this._next) != null ? tmp$.next_8be2vx$ : null;
    this.current = res;
    return ensureNotNull(res);
  };
  LinkedList2$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  LinkedList2.prototype.iterator = function () {
    return new LinkedList2$iterator$ObjectLiteral(this);
  };
  Object.defineProperty(LinkedList2.prototype, 'size', {
    get: function () {
      return this._size_0;
    }
  });
  function LinkedList2$Node() {
    this.list_8be2vx$ = null;
    this.prev_8be2vx$ = null;
    this.next_8be2vx$ = null;
  }
  LinkedList2$Node.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  LinkedList2.prototype.remove_ecc9t0$ = function (item) {
    block$break: do {
      var tmp$, tmp$_0;
      if (item.list_8be2vx$ == null)
        break block$break;
      if (!equals(item.list_8be2vx$, this)) {
        ensureNotNull(item.list_8be2vx$).remove_ecc9t0$(item);
        break block$break;
      }
      (tmp$ = item.prev_8be2vx$) != null ? (tmp$.next_8be2vx$ = item.next_8be2vx$) : null;
      (tmp$_0 = item.next_8be2vx$) != null ? (tmp$_0.prev_8be2vx$ = item.prev_8be2vx$) : null;
      if (equals(item, this.head_0))
        this.head_0 = item.next_8be2vx$;
      if (equals(item, this.tail_0))
        this.tail_0 = item.prev_8be2vx$;
      item.list_8be2vx$ = null;
      this._size_0 = this._size_0 - 1 | 0;
    }
     while (false);
  };
  LinkedList2.prototype.add_ecc9t0$ = function (item) {
    if (item.list_8be2vx$ != null) {
      ensureNotNull(item.list_8be2vx$).remove_ecc9t0$(item);
    }
    if (this.head_0 == null)
      this.head_0 = item;
    if (this.tail_0 == null) {
      this.tail_0 = item;
    }
     else {
      ensureNotNull(this.tail_0).next_8be2vx$ = item;
      item.prev_8be2vx$ = this.tail_0;
      this.tail_0 = item;
    }
    item.list_8be2vx$ = this;
    this._size_0 = this._size_0 + 1 | 0;
  };
  LinkedList2.prototype.clear = function () {
    this._size_0 = 0;
    this.head_0 = null;
    this.tail_0 = null;
  };
  LinkedList2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedList2',
    interfaces: [MutableIterable]
  };
  function ListReader(list) {
    this.list = list;
    this.position = 0;
  }
  Object.defineProperty(ListReader.prototype, 'size', {
    get: function () {
      return this.list.size;
    }
  });
  Object.defineProperty(ListReader.prototype, 'eof', {
    get: function () {
      return this.position >= this.list.size;
    }
  });
  Object.defineProperty(ListReader.prototype, 'hasMore', {
    get: function () {
      return this.position < this.list.size;
    }
  });
  ListReader.prototype.peek = function () {
    return this.list.get_za3lpa$(this.position);
  };
  ListReader.prototype.skip_za3lpa$ = function (count) {
    if (count === void 0)
      count = 1;
    this.position = this.position + count | 0;
    return this;
  };
  ListReader.prototype.read = function () {
    var $receiver = this.peek();
    this.skip_za3lpa$(1);
    return $receiver;
  };
  ListReader.prototype.dump = function () {
    var tmp$;
    tmp$ = this.list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      println(item);
    }
  };
  ListReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListReader',
    interfaces: []
  };
  function MapList() {
    this.map = lmapOf([]);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  MapList.prototype.iterator = function () {
    var $receiver = this.map.entries;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.key, item.value));
    }
    return destination.iterator();
  };
  MapList.prototype.flatMapIterator = function () {
    var $receiver = this.map.entries;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = element.value;
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element.key, item));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination.iterator();
  };
  MapList.prototype.append_xwzc9p$ = function (key, value) {
    var $receiver = this.map;
    var tmp$;
    var value_0 = $receiver.get_11rb$(key);
    if (value_0 == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value_0;
    }
    ensureNotNull(this.map.get_11rb$(key)).add_11rb$(value);
    return this;
  };
  MapList.prototype.replace_xwzc9p$ = function (key, value) {
    this.map.remove_11rb$(key);
    this.append_xwzc9p$(key, value);
    return this;
  };
  MapList.prototype.appendAll_5csooj$ = function (items) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var tmp$_0 = items[tmp$];
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      this.append_xwzc9p$(k, v);
    }
    return this;
  };
  MapList.prototype.replaceAll_5csooj$ = function (items) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var tmp$_0 = items[tmp$];
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      this.replace_xwzc9p$(k, v);
    }
    return this;
  };
  MapList.prototype.get_11rb$ = function (key) {
    return this.map.get_11rb$(key);
  };
  MapList.prototype.getFirst_11rb$ = function (key) {
    var tmp$;
    return (tmp$ = this.map.get_11rb$(key)) != null ? firstOrNull(tmp$) : null;
  };
  MapList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapList',
    interfaces: [Iterable]
  };
  function MapList_init(items, $this) {
    $this = $this || Object.create(MapList.prototype);
    MapList.call($this);
    var tmp$;
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      $this.append_xwzc9p$(k, v);
    }
    return $this;
  }
  function MapList_init_0(items, $this) {
    $this = $this || Object.create(MapList.prototype);
    MapList.call($this);
    var tmp$;
    tmp$ = items.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      $this.append_xwzc9p$(k, v);
    }
    return $this;
  }
  function MapList_init_1(items, $this) {
    $this = $this || Object.create(MapList.prototype);
    MapList.call($this);
    var tmp$, tmp$_0;
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.component1()
      , values = tmp$_1.component2();
      tmp$_0 = values.iterator();
      while (tmp$_0.hasNext()) {
        var v = tmp$_0.next();
        $this.append_xwzc9p$(k, v);
      }
    }
    return $this;
  }
  function Pool(reset, preallocate, gen) {
    if (reset === void 0)
      reset = Pool_init$lambda;
    if (preallocate === void 0)
      preallocate = 0;
    this.reset_0 = reset;
    this.gen_0 = gen;
    this.items_0 = new LinkedList();
    var tmp$;
    tmp$ = preallocate;
    for (var n = 0; n < tmp$; n++) {
      var $receiver = this.items_0;
      var element = this.gen_0();
      $receiver.add_11rb$(element);
    }
  }
  Object.defineProperty(Pool.prototype, 'itemsInPool', {
    get: function () {
      return this.items_0.size;
    }
  });
  Pool.prototype.alloc = function () {
    if (this.items_0.isNotEmpty()) {
      return this.items_0.removeLast();
    }
     else {
      return this.gen_0();
    }
  };
  Pool.prototype.free_11rb$ = function (v) {
    this.reset_0(v);
    this.items_0.addFirst_11rb$(v);
  };
  Pool.prototype.free_p1ys8y$ = function (v) {
    var tmp$;
    tmp$ = v.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      this.reset_0(it);
    }
    this.items_0.addAll_p1ys8y$(v);
  };
  Pool.prototype.alloc_2o04qz$ = defineInlineFunction('kds-js.com.soywiz.kds.Pool.alloc_2o04qz$', function (callback) {
    var temp = this.alloc();
    try {
      return callback(temp);
    }
    finally {
      this.free_11rb$(temp);
    }
  });
  function Pool_init$lambda(it) {
    return Unit;
  }
  Pool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pool',
    interfaces: []
  };
  function Pool_init(preallocate, gen, $this) {
    if (preallocate === void 0)
      preallocate = 0;
    $this = $this || Object.create(Pool.prototype);
    Pool.call($this, Pool_init$lambda_0, preallocate, gen);
    return $this;
  }
  function Pool_init$lambda_0(it) {
    return Unit;
  }
  function Stack() {
    this.items_0 = ArrayList_init();
  }
  Object.defineProperty(Stack.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Stack.prototype.push_11rb$ = function (v) {
    this.items_0.add_11rb$(v);
  };
  Stack.prototype.pop = function () {
    return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
  };
  Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: []
  };
  function Stack_init(items, $this) {
    $this = $this || Object.create(Stack.prototype);
    Stack.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      $this.push_11rb$(item);
    }
    return $this;
  }
  function Queue() {
    this.items_0 = new LinkedList();
  }
  Object.defineProperty(Queue.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Queue.prototype.queue_11rb$ = function (v) {
    this.items_0.addLast_11rb$(v);
  };
  Queue.prototype.dequeue = function () {
    return this.items_0.removeFirst();
  };
  Queue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Queue',
    interfaces: []
  };
  function Queue_init(items, $this) {
    $this = $this || Object.create(Queue.prototype);
    Queue.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      $this.queue_11rb$(item);
    }
    return $this;
  }
  function lmapOf(pairs) {
    var tmp$;
    var out = LinkedHashMap_init();
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var key = tmp$_0.component1()
      , value = tmp$_0.component2();
      out.put_xwzc9p$(key, value);
    }
    return out;
  }
  function toLinkedMap($receiver) {
    var tmp$;
    var out = LinkedHashMap_init();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.component1()
      , value = tmp$_0.component2();
      out.put_xwzc9p$(key, value);
    }
    return out;
  }
  function getCyclic($receiver, index) {
    return $receiver.get_za3lpa$(index % $receiver.size);
  }
  function flip($receiver) {
    var destination = ArrayList_init($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Pair(item.value, item.key));
    }
    return toMap(destination);
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function toTreeMap($receiver, comparator) {
    throw new NotImplementedError_init();
  }
  function toCaseInsensitiveTreeMap($receiver) {
    var res = new CaseInsensitiveHashMap();
    res.putAll_a2k3zr$($receiver);
    return res;
  }
  function CaseInsensitiveHashMap(mapOrig, lcToOrig, mapLC) {
    if (mapOrig === void 0)
      mapOrig = lmapOf([]);
    if (lcToOrig === void 0)
      lcToOrig = lmapOf([]);
    if (mapLC === void 0)
      mapLC = lmapOf([]);
    this.mapOrig_0 = mapOrig;
    this.lcToOrig_0 = lcToOrig;
    this.mapLC_0 = mapLC;
  }
  CaseInsensitiveHashMap.prototype.containsKey_11rb$ = function (key) {
    return this.mapLC_0.containsKey_11rb$(key.toLowerCase());
  };
  CaseInsensitiveHashMap.prototype.clear = function () {
    this.mapOrig_0.clear();
    this.mapLC_0.clear();
    this.lcToOrig_0.clear();
  };
  CaseInsensitiveHashMap.prototype.get_11rb$ = function (key) {
    return this.mapLC_0.get_11rb$(key.toLowerCase());
  };
  CaseInsensitiveHashMap.prototype.put_xwzc9p$ = function (key, value) {
    this.remove_11rb$(key);
    this.mapOrig_0.put_xwzc9p$(key, value);
    this.lcToOrig_0.put_xwzc9p$(key.toLowerCase(), key);
    return this.mapLC_0.put_xwzc9p$(key.toLowerCase(), value);
  };
  CaseInsensitiveHashMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      this.put_xwzc9p$(v.key, v.value);
    }
  };
  var throwCCE = Kotlin.throwCCE;
  CaseInsensitiveHashMap.prototype.remove_11rb$ = function (key) {
    var lkey = key.toLowerCase();
    var okey = this.lcToOrig_0.get_11rb$(lkey);
    var $receiver = this.mapOrig_0;
    var tmp$;
    (Kotlin.isType(tmp$ = $receiver, MutableMap) ? tmp$ : throwCCE()).remove_11rb$(okey);
    var res = this.mapLC_0.remove_11rb$(lkey);
    this.lcToOrig_0.remove_11rb$(lkey);
    return res;
  };
  Object.defineProperty(CaseInsensitiveHashMap.prototype, 'entries', {
    get: function () {
      return this.mapOrig_0.entries;
    }
  });
  Object.defineProperty(CaseInsensitiveHashMap.prototype, 'keys', {
    get: function () {
      return this.mapOrig_0.keys;
    }
  });
  Object.defineProperty(CaseInsensitiveHashMap.prototype, 'size', {
    get: function () {
      return this.mapOrig_0.size;
    }
  });
  Object.defineProperty(CaseInsensitiveHashMap.prototype, 'values', {
    get: function () {
      return this.mapOrig_0.values;
    }
  });
  CaseInsensitiveHashMap.prototype.containsValue_11rc$ = function (value) {
    return this.mapOrig_0.containsValue_11rc$(value);
  };
  CaseInsensitiveHashMap.prototype.isEmpty = function () {
    return this.mapOrig_0.isEmpty();
  };
  CaseInsensitiveHashMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseInsensitiveHashMap',
    interfaces: [MutableMap]
  };
  function splice($receiver, removeOffset, removeCount, itemsToAdd) {
    for (var n = 0; n < removeCount; n++)
      $receiver.removeAt_za3lpa$(removeOffset);
    for (var n_0 = 0; n_0 < itemsToAdd.length; n_0++) {
      $receiver.add_wxm5ur$(removeOffset + n_0 | 0, itemsToAdd[n_0]);
    }
  }
  function reduceAcumulate($receiver, init, reductor) {
    var tmp$;
    var acc = init;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      acc = reductor(acc, item);
    }
    return acc;
  }
  function mapWhile(cond, gen) {
    var out = ArrayList_init();
    while (cond()) {
      var element = gen(out.size);
      out.add_11rb$(element);
    }
    return out;
  }
  function IntMap() {
    this.map_0 = new Map();
  }
  IntMap.prototype.remove_za3lpa$ = function (key) {
    this.map_0.delete(key);
  };
  IntMap.prototype.get_za3lpa$ = function (key) {
    return this.map_0.get(key);
  };
  IntMap.prototype.set_wxm5ur$ = function (key, value) {
    this.map_0.set(key, value);
  };
  IntMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntMap',
    interfaces: []
  };
  $$importsForInline$$['kmem-js'] = $module$kmem_js;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kds = package$soywiz.kds || (package$soywiz.kds = {});
  package$kds.BitSet = BitSet;
  $$importsForInline$$['kds-js'] = _;
  package$kds.CacheMap = CacheMap;
  Computed.WithParent = Computed$WithParent;
  package$kds.Computed = Computed;
  Extra.Mixin = Extra$Mixin;
  package$kds.lmapOf_qfcya0$ = lmapOf;
  Extra.Property = Extra$Property;
  Extra.PropertyThis = Extra$PropertyThis;
  package$kds.Extra = Extra;
  package$kds.extraProperty = extraProperty;
  package$kds.getOrPut_m58qq4$ = getOrPut;
  Object.defineProperty(package$kds, 'Kds', {
    get: Kds_getInstance
  });
  Object.defineProperty(package$kds, 'KDS_VERSION', {
    get: function () {
      return KDS_VERSION;
    }
  });
  package$kds.LinkedList = LinkedList;
  LinkedList2.Node = LinkedList2$Node;
  package$kds.LinkedList2 = LinkedList2;
  package$kds.ListReader = ListReader;
  package$kds.MapList_init_svx7l6$ = MapList_init;
  package$kds.MapList_init_4lrrid$ = MapList_init_0;
  package$kds.MapList_init_1z6cj6$ = MapList_init_1;
  package$kds.MapList = MapList;
  package$kds.Pool_init_xsjjga$ = Pool_init;
  package$kds.Pool = Pool;
  package$kds.Stack_init_i5x0yv$ = Stack_init;
  package$kds.Stack = Stack;
  package$kds.Queue_init_i5x0yv$ = Queue_init;
  package$kds.Queue = Queue;
  package$kds.toLinkedMap_6hr0sd$ = toLinkedMap;
  var package$ext = package$kds.ext || (package$kds.ext = {});
  package$ext.getCyclic_yzln2o$ = getCyclic;
  package$ext.flip_go3l1a$ = flip;
  package$ext.toTreeMap_awek33$ = toTreeMap;
  package$ext.toCaseInsensitiveTreeMap_yrl0k6$ = toCaseInsensitiveTreeMap;
  package$ext.CaseInsensitiveHashMap = CaseInsensitiveHashMap;
  package$ext.splice_b7gcku$ = splice;
  package$ext.reduceAcumulate_l1hrho$ = reduceAcumulate;
  package$ext.mapWhile_sj71nh$ = mapWhile;
  package$kds.IntMap = IntMap;
  KDS_VERSION = '0.1.0';
  Kotlin.defineModule('kds-js', _);
  return _;
}));

//# sourceMappingURL=kds-js.js.map
