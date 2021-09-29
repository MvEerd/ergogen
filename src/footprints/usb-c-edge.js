// USB-C PCB Edge connector.
// A 0.8mm thick PCB should be used with this footprint

module.exports = {
    nets: {
        GND: 'GND'
    },
    params: {
        class: 'USBC'
    },
    body: p => `
        (module USB-C-PCB (layer F.Cu) (tedit 607F55D3)
            ${p.at /* parametric position */}

            (fp_text value "USB-C Conn" (at 0 0) (layer F.Fab)
              (effects (font (size 0.787402 0.787402) (thickness 0.015)))
            )
            (fp_line (start -3.345 2.75) (end -3.345 4.2) (layer Edge.Cuts) (width 0.15))
            (fp_line (start 3.345 2.75) (end 3.345 4.2) (layer Edge.Cuts) (width 0.15))
            (fp_line (start 3.045 0) (end 3.345 0.75) (layer Edge.Cuts) (width 0.15))
            (fp_line (start 3.095 1.5) (end 3.095 2.5) (layer Edge.Cuts) (width 0.15))
            (fp_line (start -3.095 1.5) (end -3.095 2.5) (layer Edge.Cuts) (width 0.15))
            (fp_line (start -3.045 0) (end -3.345 0.75) (layer Edge.Cuts) (width 0.15))
            (fp_line (start 3.345 1.25) (end 3.345 2.75) (layer F.Fab) (width 0.1))
            (fp_line (start 3.345 0.75) (end 3.345 1.25) (layer Edge.Cuts) (width 0.15))
            (fp_line (start 3.345 0) (end 3.345 0.75) (layer F.Fab) (width 0.1))
            (fp_line (start -3.345 1.25) (end -3.345 2.75) (layer F.Fab) (width 0.1))
            (fp_line (start -3.345 0.75) (end -3.345 1.25) (layer Edge.Cuts) (width 0.15))
            (fp_line (start -3.345 0) (end -3.345 0.75) (layer F.Fab) (width 0.1))
            (fp_line (start 3.045 0) (end 3.345 0) (layer F.Fab) (width 0.1))
            (fp_line (start -3.045 0) (end 3.045 0) (layer Edge.Cuts) (width 0.15))
            (fp_line (start -3.345 0) (end -3.045 0) (layer F.Fab) (width 0.1))
            (fp_arc (start 3.345 1.5) (end 3.345 1.25) (angle -90) (layer Edge.Cuts) (width 0.15))
            (fp_arc (start 3.345 2.5) (end 3.345 2.75) (angle 90) (layer Edge.Cuts) (width 0.15))
            (fp_arc (start -3.345 1.5) (end -3.345 1.25) (angle 90) (layer Edge.Cuts) (width 0.15))
            (fp_arc (start -3.345 2.5) (end -3.345 2.75) (angle -90) (layer Edge.Cuts) (width 0.15))
            (fp_arc (start -3.595 4.2) (end -3.595 4.45) (angle -90) (layer Edge.Cuts) (width 0.15))
            (fp_arc (start 3.595 4.2) (end 3.595 4.45) (angle 90) (layer Edge.Cuts) (width 0.15))
            (pad B11 smd rect (at 2.25 2.7) (size 0.25 3.5) (layers B.Cu B.Mask))
            (pad B10 smd rect (at 1.75 2.7) (size 0.25 3.5) (layers B.Cu B.Mask))
            (pad B8 smd rect (at 0.75 2.7) (size 0.25 3.5) (layers B.Cu B.Mask))
            (pad B7 smd rect (at 0.25 2.7) (size 0.25 3.5) (layers B.Cu B.Mask))
            (pad B6 smd rect (at -0.25 2.7) (size 0.25 3.5) (layers B.Cu B.Mask))
            (pad B5 smd rect (at -0.75 2.7) (size 0.25 3.5) (layers B.Cu B.Mask))
            (pad B3 smd rect (at -1.75 2.7) (size 0.25 3.5) (layers B.Cu B.Mask))
            (pad B2 smd rect (at -2.25 2.7) (size 0.25 3.5) (layers B.Cu B.Mask))
            (pad B12 smd rect (at 2.75 2.45) (size 0.25 4) (layers B.Cu B.Mask))
            (pad B9 smd rect (at 1.25 2.45) (size 0.25 4) (layers B.Cu B.Mask))
            (pad B4 smd rect (at -1.25 2.45) (size 0.25 4) (layers B.Cu B.Mask))
            (pad B1 smd rect (at -2.75 2.45) (size 0.25 4) (layers B.Cu B.Mask))
            (pad A1 smd rect (at 2.75 2.45) (size 0.25 4) (layers F.Cu F.Mask))
            (pad A4 smd rect (at 1.25 2.45) (size 0.25 4) (layers F.Cu F.Mask))
            (pad A9 smd rect (at -1.25 2.45) (size 0.25 4) (layers F.Cu F.Mask))
            (pad A12 smd rect (at -2.75 2.45) (size 0.25 4) (layers F.Cu F.Mask))
            (pad A2 smd rect (at 2.25 2.7) (size 0.25 3.5) (layers F.Cu F.Mask))
            (pad A3 smd rect (at 1.75 2.7) (size 0.25 3.5) (layers F.Cu F.Mask))
            (pad A5 smd rect (at 0.75 2.7) (size 0.25 3.5) (layers F.Cu F.Mask))
            (pad A6 smd rect (at 0.25 2.7) (size 0.25 3.5) (layers F.Cu F.Mask))
            (pad A7 smd rect (at -0.25 2.7) (size 0.25 3.5) (layers F.Cu F.Mask))
            (pad A8 smd rect (at -0.75 2.7) (size 0.25 3.5) (layers F.Cu F.Mask))
            (pad A10 smd rect (at -1.75 2.7) (size 0.25 3.5) (layers F.Cu F.Mask))
            (pad A11 smd rect (at -2.25 2.7) (size 0.25 3.5) (layers F.Cu F.Mask))
    )
    `
}