package edu.eci.arsw.blueprints.persistence.impl;

import edu.eci.arsw.blueprints.model.Blueprint;
import edu.eci.arsw.blueprints.model.Point;
import edu.eci.arsw.blueprints.persistence.Filter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubS implements Filter {
    @Override
    public Blueprint filter(Blueprint bp) {
        List<Point> points = bp.getPoints();
        List<Point> pointSub = new ArrayList<>();
        for(int i = 0; i< points.size(); i+=2){
            pointSub.add(points.get(i));
        }
        bp.setPoints(pointSub);
        return bp;
    }
}
