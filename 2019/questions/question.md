# 问题 


某个程序产生的汇编码，程序只有一条`int i=0`语句。关于这个汇编有几个问题。

```
G_M196_IG01:
   0xff723184a0   daddiu  sp, sp, -32
   0xff723184a4   sd  fp, 0(sp)
   0xff723184a8   sd  ra, 8(sp)
   0xff723184ac   ori  fp, sp, 0x0
   0xff723184b0   sw  zero, 20(fp)
   0xff723184b4   sd  a0, 24(fp)

G_M196_IG02:
   0xff723184b8   lui  a0, 0xff
   0xff723184bc   ori  a0, a0, 0x7220
   0xff723184c0   dsll  a0, a0, 16
   0xff723184c4   ori  a0, a0, 0x7c38
   0xff723184c8   lw  a0, 0(a0)
   0xff723184cc   sltiu  a0, a0, 1
   0xff723184d0   beq  a0, zero, 0xff723184f8
   0xff723184d4   nop
   0xff723184d8   b  0xff72318510
   0xff723184dc   nop
   0xff723184e0   nop
   0xff723184e4   nop
   0xff723184e8   nop
   0xff723184ec   nop
   0xff723184f0   nop
   0xff723184f4   nop
   0xff723184f8   lui  t9, 0xff
   0xff723184fc   ori  t9, t9, 0xec0d
   0xff72318500   dsll  t9, t9, 16
   0xff72318504   ori  t9, t9, 0x2938
   0xff72318508   jalr  t9
   0xff7231850c   nop

G_M196_IG03:
   0xff72318510   nop
   0xff72318514   daddiu  a0, zero, 0
   0xff72318518   sw  a0, 20(fp)
   0xff7231851c   nop

G_M196_IG04:
   0xff72318520   ld  fp, 0(sp)
   0xff72318524   ld  ra, 8(sp)
   0xff72318528   daddiu  sp, sp, 32
   0xff7231852c   jr  ra
   0xff72318530   nop

```

## 1. G_M196_IG02检查的是什么异常？

x86上这里是 `call CORINFO_HELP_DBG_IS_JUST_MY_CODE`

龙芯上改成了`jalr t9(0xecff2938)`

这个处理的哪种异常？


## 2. G_M196_IG02那一长串`NOP`指令是必须的吗？


## 3. 关于龙芯指令集

龙芯有在汇编层面显式支持向量处理或SIMD执行的指令吗？
