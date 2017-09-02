# Combo Translator

 Reading combo notations can be very confusing, especially for someone new to fighting games.  This app was made to help make combo notations easier to read.  Just paste or manually type in a combo.  You can also click an image to see what that specific notation means.  
 
 Github Pages Site: [https://nanu00.github.io/combo-translator/](https://nanu00.github.io/combo-translator/)

--- 
## Content 
- [Games Supporter](#games-supported)
- [Formatting](#formatting)
    - [General](#general)
        - [Comments](#gcomments)
        - [Inputs](#ginputs)
    - [Street Fighter 5](#streetfighter)
        - [Separators](#sseparators)
        - [Buttons](#sbuttons)
        - [Motions](#smotions)
        - [Command Normals](#scommand-normals)
        - [Special Moves](#sspecial-moves)
        - [Critical Arts](#scritical-arts)
    - [Tekken](#games-supported)
        - [Separators](#tseparators)
        - [Buttons](#tbuttons)
        - [Motions](#tmotions)
        - [Special Moves](#tspecial-moves)
        - [Special States](#tspecial-states)


<a name="games-supported"></a>
## Games Supported 
- **Street Fighter 5**
- **Tekken**
---
<a name="formatting"></a>
## Formatting

<a name="general"></a>
### General
<a name="gcomments"></a>
- ##### Comments
 Use parentheses to add comments to your combo
 > `(comment using parentheses)`
 <a name="ginputs"></a>
- ##### Inputs
 Generally, commas are used to separate inputs
 > `mp,mp, qcf+p`
 
 Combine inputs using "+".
 > `1+2`-->`Outputs "1+2"`
 `1 2`-->`Outputs "1" "2"`
 
 Try to use numpad notation and abreviated motions whenever possible as  they are the most reliable
 > `236+p` instead of `hadoken`
 `360` instead of `spinning pile driver`
 `qcfqcf+p` instead of `super`

 <a name="streetfighter"></a>
 ## Street Fighter 5
 <a name="sseparators"></a>
- ##### Separators
Use `,` to separate inputs
> `mp, mp, hp`

Use `>` to show a chain
> `lk> mk> mh`

When using `xx` to notate a `cancel` be sure to surround it with `space`
> `c.mk xx qcf+p`
<a name="sbuttons"></a>
-  ##### Buttons
Punch
> ` lp, mp, hp, st.lp, st.mp, st.hp, jab, strong, fierce`

Kick
> `lk, mk, hk, st.lk, st.mk, st.hk, short, forward, roundhouse`

Crouching/Jumping/Standing (add `cr.`, `c.`, `j,`, `st.` or `s.` ) to beginning
>Example:
`cr.lp, j.lk, st.fierce` 
V-trigger/V-skill
`vtrigger, v trigger, vskill, v skill`
<a name="smotions"></a>
- ##### Motions
Direction (No up-back/7 or up-forward/9)
> `db, d, df, b, f, u, 1, 2, 3, 4, 6, 8`

Quarter Circle Forward/Back
> `qcf, qcb, 236, 214`

Dragon Punch Forward/Back
> `dp, rdp, fqcf, fqcb, 623, 421`

Charge Back/Forward
>`cbf, [4]6`

Charge Down/Up
> `cdu, [2]8`

Half Circle Forward/Back
> `hcf, hcb, 41236, 63214`

Full Circle Forward/Back
> `fcf, fcb, 360, 63214789, 41236987`

[n] Kicks/Punch
> `p, pp, 2p, ppp, 3p, k, kk, 2k, kkk, 3k`

Hold [n] Button
> `h1b, h2b`

Tap Punch
> `tapp`
<a name="scommand-normals"></a>
- ##### Command Normals
Type a `direction` `+` `button strength`
>`Correct -> f+mp` 
`Incorrect -> f mp`
<a name="sspecial-moves"></a>
- ##### Special Moves
Most special moves are supported by writing the full name
> `hadoken -> Outputs qcf+p`

To add a button strength type a `button stength` followed by a `space` and then a `special move`
>`mp hadoken -> Outputs "mp+qcf"`
`hk spinning bird kick -> Outputs "[2]8+hk"`
`ex spd -> Outputs "360+pp"`
<a name="scritical-arts"></a>
- ##### Critical Arts
Use two motions in a row + a button
> `qcfqcf+p`
For charge supers...
> `[4]646+p`

<a name="tekken"></a>
### Tekken 7

<a name="tseparators"></a>
- ##### Separators
Use `,` to separate inputs
> `f, 1, 2, b`

<a name="tbuttons"></a>
- ##### Buttons
Use `1`, `2`, `3`, or `4` for face buttons.  Use `+` to combine inputs.
> `1 2 -> Outputs "1" "2"`
`1+2 -> Outputs "1+2"`

<a name="tmotions"></a>
- ##### Motions
Directions
Capitalize input to indicate that the button must be held

|&#8598;`ub, u/b`|&#8593;`u`|&#8599;`uf, u/f`|
|---|---|---|
|&#8592;`b`|`N,n`|&#8594;`f`|
|&#8601;`db, d/b`|&#8595;`d`|&#8600;`d, d/f`|
`qcf` and `qcb` (Quarter Circle Forward/Back) are also accepted

<a name="tspecial-moves"></a>
- ##### Special Moves
> `Work in progress`

Some special moves are accepted (Currently only `ewgf`/`ewhf` and `CDS`)
>`ewgf -> Outputs "f n d/f f 2"`

<a name="tspecial-states"></a>
- ##### Special States
(instant)While Standing
>`iws, iWS, ws, WS`

(instant)While Running
>`iwr, iWR, wr, WR`

Wall Splat
>`w!, W!`

Wall Break
>`wb!, WB!`

Floor Break
>`f!, F!, fb!, FB!`

Screw
>`s!, S!`

Counter Hit
>`ch, CH`